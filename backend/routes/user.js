//post/auth/signup - post/auth/login
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const userCtrl = require('../controllers/user');
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/refresh',userCtrl.refreshToken);
router.get('/:id',auth,userCtrl.getOne)
router.get('/edit/:id',auth,userCtrl.getOneToEdit)

router.put('/edit/:id',auth, multer, userCtrl.editOne);

router.delete('/:id',auth,userCtrl.deleteOne);
router.delete('/data/:id',auth,userCtrl.deleteDataOne);
router.delete('/avatar/:id',auth,userCtrl.deleteAvatar);


module.exports = router;