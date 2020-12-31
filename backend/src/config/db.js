require('dotenv').config();
const mongoose=require('mongoose');
const db=mongoose.connect(process.env.databaseUri,({
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}));
   
process.on('SIGINT',()=>{
    mongoose.disconnect().then(()=>{
        console.log('disconnecting from database');
        process.exit();
    })
})

module.exports=db;

