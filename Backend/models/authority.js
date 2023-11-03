const mongoose = require('mongoose')

const authoritySchema = new mongoose.Schema({
    name: { type: String, required: true },

    controlState: { type: String, required: true },
    problems: { type: String }

})