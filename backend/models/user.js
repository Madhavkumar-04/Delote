const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    googleId: String,
    facebookId: String,
    avatar: String,
    date: { type: Date, default: Date.now }
});

// Check if the model already exists before defining it
module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
