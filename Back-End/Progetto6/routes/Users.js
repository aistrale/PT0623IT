const express = require('express');
const router = express.Router();

// Model
const UserModel = require('../models/UserModel');

// Middlewares
const authMiddleware = require('../middlewares/AuthMiddleware');

// Users Routes
router.get('/', (req, res) => {
    return res.status(200).json({message: 'Hello World!!!'})
})

router.get('/users', authMiddleware , async (req, res) => {
    const allUsers = await UserModel.find();
    return res.status(200).json(allUsers)
})

// Export Router
module.exports = router;