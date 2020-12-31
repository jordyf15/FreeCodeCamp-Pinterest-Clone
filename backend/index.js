require('dotenv').config();
const express=require('express');
const loginRouter=require('./src/routes/login');
const pinRouter=require('./src/routes/pin');
const db=require('./src/config/db');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
const path=require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
db
.then(()=>{
    console.log('connected to database')
    app.use(express.static('build'));

    app.get('/test',(req,res)=>{
        res.send('hello japan');
    })
    app.use('/api/login',loginRouter);
    app.use('/api/pin',pinRouter);
})
.catch((err)=>{

})


app.listen(process.env.PORT)
.on('listening',()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})
.on('error',(err)=>{
    console.log('error: ',err);
})

