const citizen = require('../models/citizen');
const otpModel = require('../models/otp');
const otpGenerator = require('otp-generator');
const bcrypt = require('bcrypt');

exports.sendOTP = async (req, res) => {
    try {
        // Fetch email from req.body
        const { email, phoneNumber } = req.body;

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
            phoneNumber: phoneNumber,
            otp: generatedOTP,
            email: email
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

//Signup Controller
exports.signupController = async (req, res) => {
    try {
        // Fetch data
        const { name, email, address, district,
            state, country, aadhaar, password, gender, otp } = req.body;

        if (!name || !email || !address || !district || !state ||
            !country || !aadhaar || !gender || !password || !otp) {
            return res.status(400).json({
                success: false,
                message: "All details are necessary"
            })
        }

        //Check for user
        const userExist = await citizen.findOne({ email: email });

        if (userExist) {
            return res.status(401).json({
                success: false,
                message: "User already registered",
            })
        }

        // Find most recent otp
        const recentOtp = await otpModel.find({ email: email }).sort({ createdAt: -1 }).limit(1);

        console.log("Recent otp:", recentOtp);

        if (recentOtp.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Recent OTP not found",
            })
        }
        else if (otp !== recentOtp[0].otp) {
            return res.status(400).json({
                success: false,
                message: "Invalid OTP",
            })
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Seperate name for generating image
        const [firstname, lastname] = name.split(' ');

        //Create entry of user in database
        const userEntry = await citizen.create({
            name: name,
            gender: gender,
            email: email,
            address: address,
            district: district,
            state: state,
            country: country,
            password: hashedPassword,
            aadhaar: aadhaar,
            image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstname} ${lastname}`
        })

        // Return Response
        return res.status(200).json({
            success: true,
            message: "User registered successfully",
            user: userEntry
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error in signup controller",
            error: error.message

        })
    }
}