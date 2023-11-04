const mongoose = require('mongoose')

const authoritySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    role: { type: String, required: true },
    complaintsReceived: [{ type: mongoose.Schema.Types.ObjectId, ref: "complaints" }]
});

module.exports = mongoose.model("cuthority", authoritySchema);