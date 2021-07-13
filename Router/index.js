const express = require('express');
const router = express.Router();

const userController = require('../Controller/userController');

router.get('/user', userController.getUser);
router.get('/users', userController.postUser);
router.get('/insert-post', userController.postPost);


module.exports = router;

