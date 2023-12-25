const User = require('../models/userModel');

const authController = {
    loginUser: async (req, res) => {
      try {
        const { email, password } = req.body;
  
        // Check if the user exists
        const user = await User.findOne({ email });
  
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
  
        // Check if the password is correct
        if (user.password !== password) {
          return res.status(401).json({ message: 'Incorrect password' });
        }
  
        // Store user information in the session
        req.session.user = {
          _id: user._id,
          email: user.email,
          // Add other user information as needed
        };
  
        res.status(200).json({ message: 'Login successful' });
      } catch (error) {
        console.error('Error during user login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    },
  };
  
  module.exports = authController;