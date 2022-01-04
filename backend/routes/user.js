//post/auth/signup - post/auth/login
const express = require('express');
const router = express.Router();


const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.post('/test', userCtrl.test);
router.get('/:id',userCtrl.getOne)

module.exports = router;