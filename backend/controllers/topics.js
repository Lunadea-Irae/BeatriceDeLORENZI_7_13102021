const Topic = require('../models/message');
const topicTest=require('../models/models/groupomaniaTopics.json');
const fs = require('fs');

//get
exports.getAllTopics = (req, res, next) => {
    res.status(200).json(topicTest);
/*        .then((topics) => { res.status(200).json(topics); })
        .catch((error) => { res.status(400).json({ error: error }); });*/
};

//get/:id
exports.getOneTopic = (req, res, next) => {
    topic = topicTest.filter(data=>data.id === Number(req.params.id));
    res.status(200).json(topic);
};
//post
exports.createTopic = (req, res, next) => {
    const topicObject = JSON.parse(req.body.topic);
    delete topicObject._id;
    const topic = new Topic({
        ...topicObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        likes: 0,
        usersLiked: [],
        usersDisliked: []
    });
    topic.save()
        .then(() => { res.status(201).json({ message: 'Topic enregistrée avec succés !' }); })
        .catch((error) => { res.status(400).json({ error: error.message }); });

}


//put/:id
exports.modifyTopic = (req, res, next) => {
    if (req.file) {
        Topic.findById(req.params.id)
            .then(topic => {
                const filename = topic.imageUrl.split('/images/')[1];
                fs.unlink(`images/${filename}`, () => { console.log("image supprimée") });
            });
    }
    const topicObject = req.file ?
        {
            ...JSON.parse(req.body.topic),
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body };

    Topic.findByIdAndUpdate(req.params.id, { ...topicObject })
        .then(() => res.status(200).json({ message: 'Topic modifiée !' }))
        .catch(error => res.status(400).json({ error: error.message }));
};

//delete/:id
exports.deleteTopic = (req, res, next) => {
    Topic.findById(req.params.id)
        .then(topic => {
            const filename = topic.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Topic.findByIdAndDelete(req.params.id)
                    .then(() => res.status(200).json({ message: 'Topic supprimée !' }))
                    .catch(error => res.status(400).json({ error }));
            });
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