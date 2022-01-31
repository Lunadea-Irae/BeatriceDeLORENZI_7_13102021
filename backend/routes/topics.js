//get - get/:id - post - put/:id - delete/:id
//post/:id/like

const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');
const regExpValidator = require('../middleware/regex-validator');
const topicCtrl = require('../controllers/topics');


//SEED
router.get('/seed',topicCtrl.seedDataBase);

//GLOBAL
router.get('/', auth,topicCtrl.getAllTopics);
router.get('/filter/:id', auth,topicCtrl.getFilteredTopics);

//ONE POST
router.get('/:id',auth, topicCtrl.getOneTopic);
router.post('/',auth, multer, topicCtrl.createTopic);
router.put('/:id',auth, multer, topicCtrl.modifyTopic);
router.delete('/:id',auth,topicCtrl.deleteTopic);

//COMMENTS
router.post('/comment/:id',auth, topicCtrl.newComment);
router.put('/comment/:id',auth, topicCtrl.editComment);
router.delete('/comment/:id',auth, topicCtrl.deleteComment);

//LIKES
router.post('/like/:id',auth, topicCtrl.addLikeToTopic);

module.exports = router;