// registrationController.js

const User = require('../models/userModel');
const JournalEntry = require('../models/entryModel');

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

      // Create a default journal entry for the new user
      const defaultEntry = new JournalEntry({
        title: 'Welcome Entry',
        content: 'This is your first journal entry. Welcome!',
        user: newUser._id, // Assign the user ID to the entry
      });
      await defaultEntry.save();

      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error('Error during user registration:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};

const logoutUser = (req, res) => {
  try {
    // Clear the session on logout
    req.session.destroy((err) => {
      if (err) {
        console.error('Error during user logout:', err);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Logout successful' });
      }
    });
  } catch (error) {
    console.error('Error during user logout:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  registrationController,
  logoutUser,
};
