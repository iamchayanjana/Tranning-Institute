const express = require('express');
const { registerUser, loginUser,getUsers} = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/list', getUsers);

module.exports = router;
