const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        min:4,
        max:10
    },
    email:{
        type:String,
        required:true,
        max:255,
        min:6
    },
    password:{
        type:String,
        required:true,
        max:16,
        min:6
    },
    plainpassword:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }

});

module.exports=mongoose.model('User',userSchema);
