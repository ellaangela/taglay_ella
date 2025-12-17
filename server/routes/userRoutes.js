const express = require('express');
// import functions
const { getUsers, createUser, updateUser, deleteUser, loginUser, } = require('../controllers/userController');

const router = express.Router();

// Route composition 
// (route name, route function[controller])

// Add login route FIRST (before wildcard routes)
router.post('/login', loginUser);

// Single
// router.get('/', getUsers);

// Combination  
router.route('/').get(getUsers).post(createUser);

router.route('/:id').put(updateUser).delete(deleteUser);

module.exports = router;