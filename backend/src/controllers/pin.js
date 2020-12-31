const axios=require('axios');
require('dotenv').config();
const Pin=require('../models/pin');
const User=require('../models/user');

const getAllPin=async(req,res)=>{
   const result=await Pin.find().populate('owner');
   res.send(result);
};

const getMyPin=async(req,res)=>{
    const result=await User.findOne({_id: req.params.id}).populate({path: 'pins',populate:{path: 'owner'}});
    res.send(result);
}
const postPin=async(req,res)=>{
    const {pinUrl,pinDesc,date,posterId}=req.body;
    const newPin= new Pin({
        pinUrl,pinDesc,date,owner:posterId,likers:[]
    })
    const user=await User.findOne({_id: posterId});
    user.pins.push(newPin._id);
    await user.save();
    await newPin.save();
    const result=await Pin.findOne({_id: newPin._id}).populate('owner');
    res.send(result);
}

const likePin=async(req,res)=>{
    const pinId=req.params.id;
    const {likerId}=req.body;
    const likedPin=await Pin.findOne({_id: pinId});
    likedPin.likers.includes(likerId)
    ?likedPin.likers.splice(likedPin.likers.indexOf(likerId),1)
    :likedPin.likers.push(likerId);
    await likedPin.save();
    const result=await Pin.findOne({_id: likedPin._id}).populate('owner');
    res.send(result);
}

const deletePin=async(req,res)=>{
    const {ownerId,pinId}=req.body;
    await Pin.deleteOne({_id: pinId});
    const deletedPinOwner=await User.findOne({_id: ownerId});
    deletedPinOwner.pins.splice(deletedPinOwner.pins.indexOf(pinId),1);
    await deletedPinOwner.save();
    res.send(deletedPinOwner);
}

module.exports={
    getAllPin,postPin,getMyPin,likePin,deletePin
}