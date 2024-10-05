const express = require('express');
const router = express.Router();
const User = require('../models/usermodel');  // Assuming the schema is stored in models/userModel.js

// Route to get all users
router.get('/list', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  });
  
  // Route to get a user by ID
  router.get('/:id', async (req, res) => {
    try {
      const user = await User.findOne({ userid: req.params.id });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user' });
    }
  });
  
  // Route to save a new user
  router.post('/save', async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json({ message: 'User saved successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error saving user' });
    }
  });
  
  // routes/users.js

router.put('/update/:id', async (req, res) => {
    try {
      const updatedUser = await User.findOneAndUpdate(
        { userid: req.params.id }, // Ensure this matches the type of userid
        req.body,
        { new: true } // Return the updated document
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
      res.status(500).json({ message: 'Error updating user', error });
    }
  });
  

  module.exports = router;