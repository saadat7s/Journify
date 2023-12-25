// registrationRoute.js

const express = require('express');
const { registrationController, logoutUser } = require('../controller/registrationController');

const router = express.Router();

// Register a new user
router.post('/', registrationController.registerUser);

// Logout
router.get('/logout', logoutUser);

module.exports = router;
