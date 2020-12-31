require('dotenv').config();
const axios=require('axios');
const getAuthCode=(req,res)=>{
    res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.clientId}`);
}
const User=require('../models/user');
const getUser=async (req,res)=>{
    try{
        const body={
            client_id: process.env.clientId,
            client_secret: process.env.clientSecret,
            code: req.body.code
        };
        const option={headers:{accept: 'application/json'}};
        const response=await axios.post('https://github.com/login/oauth/access_token',body,option);
        const token=response.data['access_token'];
        const {data}=await axios.get('https://api.github.com/user',{headers:{Authorization: `token ${token}`}});
        const user=await User.findOne({githubId: data.id})
        if(!user){
            const newUser=new User({
                githubId: data.id,
                userName: data.login,
                avatarUrl: data.avatar_url,
                bio: data.bio
            });
            await newUser.save();
            res.send(newUser);
        }else{
            //just in case if existing user change their account in github like their images or something
            user.userName=data.login;
            user.avatarUrl= data.avatar_url;
            user.bio=data.bio;
            await user.save();       
            res.send(user);
        }
    }catch(err){
        res.send(undefined);
    }
}

module.exports={getAuthCode,getUser};