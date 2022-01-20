
const models = require('../models');
const fs = require('fs');
const getMediaDimensions = require('get-media-dimensions');
const keywords = require('../middleware/keywords');


//get
exports.getAllTopics = (req, res, next) => {
    models.Message.findAll({ include: [{ model: models.UserMessages, include: { model: models.User, attributes: { exclude: ['email', 'password', 'showEmail'] } } }, { model: models.Like }, { model: models.Comment }] })
        .then(topics => {
            res.status(200).json(topics)
        })
        .catch((error) => { res.status(400).json({ error: error }); });

};



exports.getFilteredTopics = (req, res, next) => {

    models.Message.findByPk(req.params.id, { include: { model: models.Hashtag, include: { model: models.Message, include: [{ model: models.UserMessages, include: { model: models.User, attributes: { exclude: ['email', 'password', 'showEmail'] } } }, models.Like, models.Comment] } } })
        .then(r => {
            let topics = [];
            r.Hashtags.forEach(ht => {
                ht.Messages.forEach(mess => { mess.id == req.params.id ? '' : topics.push(mess) })
            });
            if (topics.length === 0) {
                models.Message.findAll({ include: [{ model: models.UserMessages, include: { model: models.User, attributes: { exclude: ['email', 'password', 'showEmail'] } } }, { model: models.Like }, { model: models.Comment }] }).then(topics => {

                    res.status(200).json(topics);

                    return;
                })
                    .catch((error) => {
                        res.status(400).json({ error: error });
                        return;
                    });
            } else {

                res.status(200).json(topics)
                return;
            }
        })
        .catch(error => res.status(400).json({ error: error.message }))
}





// ############ TOPIC


//get/:id
exports.getOneTopic = (req, res, next) => {

    models.Message.findByPk(req.params.id, { include: [{ model: models.UserMessages, include: { model: models.User, attributes: { exclude: ['email', 'password', 'showEmail'] } } }, { model: models.Comment, include: { model: models.User, attributes: { exclude: ['email', 'password', 'showEmail'] } } }, { model: models.Like }, { model: models.Hashtag }] })
        .then(topic => {
            res.status(200).json(topic);
        })
        .catch((error) => { res.status(400).json({ error: error }); });

};
//post
exports.createTopic = (req, res, next) => {
    if (req.body.title === '' || req.body.content === '') {
        res.status(401).json({ message: "Formulaire incomplet" });

        return;
    } else {

        let topic = { ...req.body };

        if (req.file) {
            topic.media = `${req.protocol}://${req.get('host')}/medias/${req.file.filename}`;
            getMediaDimensions(`${req.protocol}://${req.get('host')}/medias/${req.file.filename}`, req.file.mimetype.split('/')[0])
                .then(dimensions => {
                    topic.mediaHeight = dimensions.height;
                    topic.mediaWidth = dimensions.width;
                    models.Message.create(topic)
                        .then((r) => {
                            let topic2 = { UserId: 8, MessageId: r.dataValues.id };
                            models.UserMessages.create(topic2)
                                .then(keywords(topic.content, r))
                                .then(r => {
                                    res.status(201).json({ message: 'Topic Créé !!' });
                                    return;
                                })
                                .catch(error => {
                                    res.status(400).json({ error: error.message });
                                    return;
                                })


                        })
                        .catch(error => {
                            res.status(400).json({ error: error.message });
                            return;
                        })
                })
                .catch(e => {
                    console.error(e);
                    return;
                });
        } else {
            models.Message.create(topic)
                .then((r) => {
                    let topic2 = { UserId: 8, MessageId: r.dataValues.id };
                    models.UserMessages.create(topic2)
                        .then(keywords(topic.content, r))
                        .then(r => {
                            res.status(201).json({ message: 'Topic Créé !!' });
                            return;
                        })
                        .catch(error => {
                            res.status(400).json({ error: error.message });
                            return;
                        })
                })
                .catch(error => { res.status(400).json({ error: error.message }) })
        }
    }
};



//put/:id
exports.modifyTopic = (req, res, next) => {
    if (req.file) {
        models.Message.findByPk(req.params.id)
            .then(topic => {
                if (topic.imageUrl) {
                    const filename = topic.imageUrl.split('/medias/')[1];
                    fs.unlink(`medias/${filename}`, () => { console.log("image supprimée") });
                }
            });
    }
    let topic = { ...req.body };
    if (req.file) {
        topic.media = `${req.protocol}://${req.get('host')}/medias/${req.file.filename}`;
        getMediaDimensions(`${req.protocol}://${req.get('host')}/medias/${req.file.filename}`, req.file.mimetype.split('/')[0])
            .then(dimensions => {
                topic.mediaHeight = dimensions.height;
                topic.mediaWidth = dimensions.width;
                models.Message.update(topic, { where: { id: topic.id } })
                    .then(
                        models.Message.findOne({ where: { id: req.params.id } }).then(r => keywords(topic.content, r))
                    )
                    .then(r => {
                        res.status(201).json({ message: 'Topic enregistrée avec succés !' });
                        return;
                    })
                    .catch((error) => {
                        res.status(400).json({ error: error.message });
                        return;
                    })
            })
            .catch(e => {
                console.error(e);
                return;
            });
    } else {
        models.Message.update(topic, { where: { id: req.params.id } })
            .then(
                models.Message.findOne({ where: { id: req.params.id } }).then(r => keywords(topic.content, r))
            )
            .then(res.status(201).json({ message: 'Topic enregistrée avec succés !' }))
            .catch((error) => { res.status(400).json({ error: error.message }) })
    }
}

//delete/:id
exports.deleteTopic = (req, res, next) => {
    models.Message.findByPk(req.params.id)
        .then(topic => {
            if (topic.media) {
                const filename = topic.media.split('/medias/')[1];
                fs.unlink(`medias/${filename}`, () => { })
            }
            models.Like.destroy({ where: { messageId: req.params.id } });
            models.Comment.destroy({ where: { messageId: req.params.id } });
            models.UserMessages.destroy({ where: { messageId: req.params.id } });
            models.Message.destroy({ where: { id: req.params.id }, })
                .then(() => {
                    res.status(200).json({ message: 'Topic supprimée !' });
                    return;
                })
                .catch(error => {
                    res.status(400).json({ error });
                    return;
                });
        })

        .catch(error => res.status(500).json({ error }));
};




// ############ LIKES


//post/:id/like
exports.addLikeToTopic = (req, res, next) => {
    models.Like.findOne({ where: { UserId: 1, MessageId: req.params.id } })
        .then(r => {
            if (!r) {
                models.Like.create({ UserId: 1, MessageId: req.params.id })
                    .then(() => {
                        res.status(200).json({ like: true });
                        return;
                    })
                    .catch(error => {
                        res.status(400).json({ error: error.message });
                        return;
                    })
            } else {
                r.destroy()
                    .then(() => {
                        res.status(200).json({ like: false });
                        return;
                    })
                    .catch(error => {
                        res.status(400).json({ error: error.message });
                        return;
                    })
            }
        })
        .catch(error => {
            res.status(400).json({ error: error.message })
        })
};



// ############ COMMENTS


//add comment to topic
exports.newComment = (req, res, next) => {
    if (req.body.comment === '') {
        res.status(401).json({ error: "Formulaire incomplet" });
        return;
    } else {
        let comment = { content: req.body.comment, UserId: 1, MessageId: req.params.id };
        //, include : [{model : models.User, as : 'User', id : 6}] 
        models.Comment.findOrCreate({ where: comment })
            .then(r => { res.status(201).json({ message: "Votre commentaire a été enregistré." }) })
            .catch((error) => res.status(400).json({ error: error.message }))
    }

}


exports.editComment = (req, res, next) => {
    let comment = { content: req.body.comment };
    models.Comment.update(comment, { where: { id: req.params.id } })
        .then(r => { res.status(200).json({ message: "Votre commentaire a bien été modifié" }) })
        .catch(error => { res.status(400).json({ error: error.message }) })
}

exports.deleteComment = (req, res, next) => {
    models.Comment.destroy({ where: { id: req.params.id } })
        .then(r => { res.status(200).json({ message: "Votre commentaire a bien été supprimé" }) })
        .catch(error => { res.status(400).json({ error: error.message }) })
}