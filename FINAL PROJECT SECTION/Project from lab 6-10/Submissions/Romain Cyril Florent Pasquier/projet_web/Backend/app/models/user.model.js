// Import mongoose
const mongoose = require("mongoose");

const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

// Create Schema Instance for User and add properties
const UserSchema = mongoose.Schema({
    fullName: {
        type: String,
        trim: true,
        required: true
    },

    email: {
        type:String,
        unique:true,
        lovercase:true,
        trim:true,
        required:true
    } ,

    hash_password: {
        type:String,
        required:true
    },
    role: {
        type:String,
        required:true,
        default: "user"
    },

    commands: {
        type:Array,
        default: []
    },
    banned: {
        type: Boolean,
        default: false
    },
    total: {
        type: Number,
        default: 0
    },
    date:{
        type: Date,
        default: Date.now()
    }

});

//Create a Schema method to compare password
UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.hash_password);
}

// UserSchema.methods.generateAuthToken = async function(){
//     const user = this;
//     const token = jwt.sign(
//         {
//             _id: user._id,
//             fullName: user.fullName,
//             email: user.email,
//             hash_password: user.hash_password,
//             role: user.role,
//             commands: user.commands,
//             banned: user.banned,
//             total: user.total,
//             date: user.date
//         }, "secret"
//     );
//     user.tokens = user.tokens.concat({token});
//     await user.save();
//     return token;
// }

// Create and export User model
module.exports = mongoose.model("User", UserSchema);
