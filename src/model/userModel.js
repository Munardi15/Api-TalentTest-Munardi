const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    accountNumber: { type: Number, required: true },
    emailAddress: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    // birthDate: { type: Date, required: true },
    gender: { 
        type: String, 
        enum: ["L", "P"], 
        required: true 
    },
    employmentStatus: { type: String, required: true },
    position: { type: String, required: true }
});


module.exports = mongoose.model('user', userSchema);
