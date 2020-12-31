const mongoose=require('mongoose');

const pinSchema= new mongoose.Schema({
    pinUrl: {
        type: String,
        required: true
    },
    pinDesc: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    likers:[String]
})

const Pin=mongoose.model('Pin',pinSchema);
module.exports=Pin;