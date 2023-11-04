const mongoose = require('mongoose')

const complaintSchema = new mongoose.Schema({
    title: { type: String, required: true, },
    description: { type: String, required: true, },
    location: { type: String, required: true, },
    category: { type: String, required: true, },
    status: { type: String, required: true, enum: ['resolved', 'pending', 'draft'] },
    attachments: { type: String, },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date },
    reporter: { type: mongoose.Schema.Types.ObjectId, ref: "citizen" },
    assignedAuthority: { type: mongoose.Schema.Types.ObjectId, ref: "authority" },
});

module.exports = mongoose.model('complaints', complaintSchema);