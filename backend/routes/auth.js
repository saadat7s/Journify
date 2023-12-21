// auth.js

const express = require('express');
const { loginUser } = require('../controller/authController');

const router = express.Router();

// Route to handle user login
router.post('/login', loginUser);

module.exports = router;
