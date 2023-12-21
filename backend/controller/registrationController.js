const User = require('../models/userModel');

const registrationController = {
  registerUser: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;

      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Create a new user
      const newUser = new User({ firstName, lastName, email, password });
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error during user registration:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

module.exports = registrationController;
