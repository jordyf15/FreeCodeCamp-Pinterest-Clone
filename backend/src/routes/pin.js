const pinRouter=require('express').Router();
const {getAllPin,postPin,getMyPin,likePin,deletePin} = require('../controllers/pin');

pinRouter.route('/')
.get(getAllPin)
.post(postPin)
.delete(deletePin);

pinRouter.get('/:id',getMyPin)//userid

pinRouter.post('/likepin/:id',likePin)//pinid


module.exports=pinRouter;