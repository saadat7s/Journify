// registrationRoute.js
const express = require('express');
const { registerUser } = require('../controller/registrationController');

const router = express.Router();

// Register a new user
router.post('/', registerUser);

module.exports = router;
