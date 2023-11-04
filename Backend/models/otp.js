const mongoose = require('mongoose');
const otpSender = require('../utils/otpSender');
// const otpTemplate = require('../mailTemplates/otpVerificationTemplate');

const otpSchema = new mongoose.Schema(
    {
        phoneNumber: {
            type: Number,
            required: true,
            trim: true,
        },
        otp: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now(),
            expires: 10 * 60,
            required: true
        }
    }
);

async function sendVerificationMessage(phoneNumber, otp) {
    try {
        const mailResponse = await otpSender(phoneNumber, otp);
    }
    catch (error) {
        console.error("Error while sending verification email: ", error);
        throw error;
    }
};

otpSchema.pre("save", async function (next) {
    await sendVerificationMessage(this.phoneNumber, this.otp);
    next();
})

module.exports = mongoose.model("OTP", otpSchema);