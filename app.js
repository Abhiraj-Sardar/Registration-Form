const registerModel = require("./database");
const express=require("express");
const app = express();

app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(express.urlencoded({extended:false}));

app.get("/",(req,res)=>{
    res.render("index",{
        add:0
    });
})

app.post("/register",async(req,res)=>{
    const name=req.body.name;
    const phone=req.body.phone;
    const dob=req.body.dob;
    const gender=req.body.gender;
    console.log(req.body);
    const address=req.body.address;
    const country=req.body.country;
    const city=req.body.city;
    const newRecord=new registerModel({name,phone,dob,gender,address,country,city});
    const RecordSave = await newRecord.save();
    res.render("index",{
        add:1
    });
})


app.listen(3000,()=>{
    console.log("App is Running at Port 3000");
})