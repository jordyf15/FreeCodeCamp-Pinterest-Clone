const loginRouter=require('express').Router();
const {getAuthCode,getUser,getTokenAndSetUser}=require('../controllers/login');

loginRouter.get('/getauthcode',getAuthCode);

loginRouter.post('/getUser',getUser);

module.exports=loginRouter;