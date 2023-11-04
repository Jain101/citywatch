const citizen = require('../models/citizen');
const otpModel = require('../models/otp');
const emailValidator = require('email-validator')
const otpGenerator = require('otp-generator')

exports.sendOTP = async (req, res) => {
    try {
        // Fetch email from req.body
        const { email } = req.body;

        // // Check for correct email format
        // if (!emailValidator.isEmail(email)) {
        //     return res.status(400).json({
        //         success: false,
        //         message: 'Invalid email format',
        //     });
        // }

        // Check if user already exists
        const checkUser = await citizen.findOne({ email });

        if (checkUser) {
            return res.status(401).json({
                success: false,
                message: "User already registered."
            });
        }

        // Generate OTP containing only numeric digits (0-9)
        const generatedOTP = otpGenerator.generate(6, {
            digits: true,
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });

        // OTP must be unique
        let otpUniqueness = await otpModel.findOne({ otp: generatedOTP });
        while (otpUniqueness) {
            // Regenerate OTP if already exists in the database
            generatedOTP = otpGenerator.generate(6, {
                digits: true,
                upperCaseAlphabets: false,
                lowerCaseAlphabets: false,
                specialChars: false,
            });
            otpUniqueness = await otpModel.findOne({ otp: generatedOTP });
        }

        // Store OTP in the database
        await otpModel.create({
            email,
            otp: generatedOTP
        });

        // Return response successfully
        return res.status(200).json({
            success: true,
            message: "OTP generated successfully.",
            otp: generatedOTP // Use the variable name assigned to the generated OTP
        });

    } catch (error) {
        console.error("OTP generation error: ", error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};