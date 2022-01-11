//get - get/:id - post - put/:id - delete/:id
//post/:id/like

const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const regExpValidator = require('../middleware/regex-validator');
const topicCtrl = require('../controllers/topics');

router.get('/', topicCtrl.getAllTopics);

//ONE POST
router.get('/:id', topicCtrl.getOneTopic);
router.post('/', multer, topicCtrl.createTopic);
router.put('/:id', multer, topicCtrl.modifyTopic);
router.delete('/:id',topicCtrl.deleteTopic);

//COMMENTS
router.post('/comment/:id', topicCtrl.newComment);
router.put('/comment/:id', topicCtrl.editComment);
router.delete('/comment/:id', topicCtrl.deleteComment);

//LIKES
router.post('/like/:id', topicCtrl.addLikeToTopic);

/*router.get('/', auth, topicCtrl.getAllTopics);
router.get('/:id', auth, topicCtrl.getOneTopic);
router.post('/', auth, multer, regExpValidator, topicCtrl.createTopic);
router.put('/:id', auth, multer, regExpValidator, topicCtrl.modifyTopic);
router.delete('/:id', auth, topicCtrl.deleteTopic);
router.post('/:id/like', auth, topicCtrl.addLikeToTopic);*/

module.exports = router;