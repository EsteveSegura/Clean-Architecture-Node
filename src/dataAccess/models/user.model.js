const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, minlength: 2, maxlength: 35 },
    lastName: { type: String, minlength: 2, maxlength: 35 },
    email: { type: String, minlength: 7, maxlength: 320, unique: true },
    password: { type: String },
    country: { type: String, minlength: 4, maxlength: 56 },
    phoneNumber: { type: String, minlength: 7, maxlength: 15 },
    postalCode: { type: String, minlength: 4, maxlength: 32 },
    signupAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('userModel', userSchema);