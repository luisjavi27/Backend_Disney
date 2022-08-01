const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
let authMiddleware = require('../middlewares/authMiddleware.js')

router.get('/', authMiddleware, userController.getOneUser);

router.get('/login', userController.loginUser);

router.post('/register', userController.createUser);

module.exports = router;
