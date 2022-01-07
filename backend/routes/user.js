//post/auth/signup - post/auth/login
const express = require('express');
const router = express.Router();


const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/refresh',userCtrl.refreshToken);
router.get('/:id',userCtrl.getOne)



router.post('/test', userCtrl.test);

module.exports = router;