require('dotenv').config();

const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

exports.sendOTP = async (toPhoneNumber, otp) => {
    try {
        // Send the OTP via SMS
        const fromPhoneNumber = '+14409702876'; // Replace with your Twilio phone number
        const message = await client.messages.create({
            body: `Your OTP is: ${otp}. Valid for 5 minutes.`,
            from: fromPhoneNumber,
            to: '+918103599894',
        });

    } catch (error) {
        console.error('Error sending OTP:', error.message);
    }
};