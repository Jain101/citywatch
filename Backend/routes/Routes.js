const express = require('express');
const router = express.Router();

const { sendOTP, signupController } = require('../Controller/auth')

// OTP Router
router.post('/sendOtp', sendOTP);
router.post('/signup', signupController);

module.exports = router;