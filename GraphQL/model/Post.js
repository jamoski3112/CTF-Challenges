const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    author: {
        type:String,
        required:true,
        min:4,
        max:10
    },
    post:{
        type:String,
        required:true,
        max:255,
        min:6
    },
    date:{
        type:Date,
        default:Date.now
    }

});
module.exports=mongoose.model('Posts',postSchema);