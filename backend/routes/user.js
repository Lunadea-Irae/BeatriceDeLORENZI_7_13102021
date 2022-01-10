//post/auth/signup - post/auth/login
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/refresh',multer, userCtrl.refreshToken);
router.get('/:id',userCtrl.getOne)
router.get('/edit/:id',userCtrl.getOneToEdit)

router.put('/edit/:id', multer, userCtrl.editOne);

router.delete('/:id',userCtrl.deleteOne);
router.delete('/data/:id',userCtrl.deleteDataOne);


router.post('/test', userCtrl.test);

module.exports = router;