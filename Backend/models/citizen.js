const mongoose = require('mongoose');

const citizenSchema = new mongoose.Schema({
    name: { type: String, required: true },
    gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
    email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    password: { type: String, required: true },
    adhaar: { type: Number, required: true, unique: true },
    image: { type: String }
},
    { timestamps: true })

const User = mongoose.model("User", userModel);

module.exports = User;
