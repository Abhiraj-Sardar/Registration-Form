const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/registration").then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log(e);
})

const Schema = mongoose.Schema({
    name:String,
    phone:String,
    dob:{
        type:Date,
        default:Date.now()
    },
    gender:String,
    address:String,
    country:String,
    city:String
});

const registerModel=mongoose.model("register",Schema);
module.exports=registerModel;

