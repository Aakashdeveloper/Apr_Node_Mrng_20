const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    role:String,
    isActive:Boolean
})

mongoose.model('AprJWT', UserSchema);

module.exports = mongoose.model('AprJWT')