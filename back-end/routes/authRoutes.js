const express = require('express')
const User = require('../models/User')
const { generateToken } = require('../utils/password');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const user = req.body;
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      res.status(400).json({ message: 'User already exist' });
    }
    const newUser = new User(user);
    await newUser.save();
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error registering new user', error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    const token = generateToken({ id: user._id, projectId: user.projectId });

    const userWithoutPassword = await User.findById(user._id).select('-password');

    return res.status(200).json({ status: 'success', token, user: userWithoutPassword });
  } catch (error) {
    return res.status(500).json({ message: 'Error logging in.', error: error.message });
  }
});

module.exports = router;
