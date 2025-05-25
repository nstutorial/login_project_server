// server/routes/auth.js

const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getMe, getAllUsers } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const verifyToken = require('../middleware/verifytoken');
const isAdmin = require('../middleware/isAdmin');

// Register new user
router.post('/register', verifyToken, registerUser);

// Login user
router.post('/login', loginUser);

// Get current user profile (protected route)
router.get('/me', protect, getMe);

// Get all users (protected route)
router.get('/user-list', protect, isAdmin, getAllUsers);

module.exports = router;
