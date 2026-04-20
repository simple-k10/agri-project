const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const authController = require('../controllers/authController');

// POST /register
router.post('/register', [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('role').isIn(['user', 'admin']).withMessage('Invalid role selected')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    authController.register(req, res);
});

// POST /login
router.post('/login', [
    body('email').optional().isEmail().withMessage('Please enter a valid email'),
    body('phone').optional().isMobilePhone('any').withMessage('Please enter a valid phone number'),
    body('password').optional().exists().withMessage('Password is required for email login'),
    body('otp').optional().isNumeric().withMessage('OTP must be numeric')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    authController.login(req, res);
});

// POST /google-auth
router.post('/google-auth', (req, res) => {
    authController.googleAuth(req, res);
});

// GET /locations
router.get('/locations', (req, res) => {
    authController.getLocations(req, res);
});

// POST /verify-otp
router.post('/verify-otp', [
    body('phone').isMobilePhone('any').withMessage('Please enter a valid phone number'),
    body('otp').isNumeric().withMessage('OTP must be numeric')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    authController.verifyOtp(req, res);
});

module.exports = router;