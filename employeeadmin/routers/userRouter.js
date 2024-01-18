const express = require('express');
const userController = require('../controllers/userController');
const {validateToken} = require('../authUtil');
const router = express.Router();

router.post('/login', userController.getUserByUsernameAndPassword);
router.post('/re', userController.addUser);


module.exports = router;