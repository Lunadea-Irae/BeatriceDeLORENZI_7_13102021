
const models = require('../models');
const topicTest = require('../models/models/groupomaniaTopics.json');
const fs = require('fs');
const getMediaDimensions = require('get-media-dimensions');

//get
exports.getAllTopics = (req, res, next) => {
    //    res.status(200).json(topicTest);

    models.Message.findAll({ include: { model: models.UserMessages, include: models.User } }).then(topics => {
        res.status(200).json(topics);
    })
        .catch((error) => { res.status(400).json({ error: error }); });

};

//get/:id
exports.getOneTopic = (req, res, next) => {

    models.Message.findByPk(req.params.id, { include: { model: models.UserMessages, include: models.User } })
        .then(topic => {
            res.status(200).json(topic);
        })
        .catch((error) => { res.status(400).json({ error: error }); });

};
//post
exports.createTopic = (req, res, next) => {
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
                            .then(r => res.status(201).json({ message: 'Topic Créé !!' }))
                            .catch(error => res.status(400).json({ error: error.message }))


                    })
                    .catch(error => { res.status(400).json({ error: error.message }) })
            })
            .catch(e => { console.error(e); });
    } else {
        models.Message.create(topic)
            .then((r) => {
                let topic2 = { UserId: 8, MessageId: r.dataValues.id };
                models.UserMessages.create(topic2)
                    .then(r => res.status(201).json({ message: 'Topic Créé !!' }))
                    .catch(error => res.status(400).json({ error: error.message }))
            })
            .catch(error => { res.status(400).json({ error: error.message }) })
    }
}



//put/:id
exports.modifyTopic = (req, res, next) => {
    if (req.file) {
        models.Message.findByPk(req.params.id)
            .then(topic => {
                const filename = topic.imageUrl.split('/medias/')[1];
                fs.unlink(`medias/${filename}`, () => { console.log("image supprimée") });
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
                    .then(res.status(201).json({ message: 'Topic enregistrée avec succés !' }))
                    .catch((error) => { res.status(400).json({ error: error.message }) })
            })
            .catch(e => { console.error(e); });
    } else {
        models.Message.update(topic, { where: { id: topic.id } })
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
            models.Comment.destroy({where : {messageId : req.params.id}});
            models.UserMessages.destroy({where :{ messageId : req.params.id}});
            models.Message.destroy({ where: { id: req.params.id }, })
                .then(() => res.status(200).json({ message: 'Topic supprimée !' }))
                .catch(error => res.status(400).json({ error }));
        })

        .catch(error => res.status(500).json({ error }));
};



//post/:id/like
exports.addLikeToTopic = (req, res, next) => {

    //si like = 1 => add to [usersLiked], if =0 => remove in arrays, if =-1 => add to [usersDisliked]
    //foreach [usersLiked]=> +1 to likes & foreach [usersDisliked]=> +1 to dislikes
    Topic.findById(req.params.id).then(topic => {



        Topic.findByIdAndUpdate(req.params.id, { ...topic })
            .then(() => res.status(201).json({ message: 'Votre vote a bien été enregistré !' }))
            .catch(error => res.status(400).json({ error }));
    })
        .catch(error => res.status(500).json({ error }));


};