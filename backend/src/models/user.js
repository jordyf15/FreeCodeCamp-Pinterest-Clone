const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    githubId:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true 
    },
    avatarUrl:{
        type: String,
        required: true
    },
    bio: String,
    pins:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Pin'
    }]
});

const User = mongoose.model('User',userSchema);
module.exports=User;