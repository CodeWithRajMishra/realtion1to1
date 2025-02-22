const express= require("express");
const app=express();
const cors= require("cors");
const bodyParser = require('body-parser');
const mongoose= require("mongoose");
const userRoute= require("./routes/userRoute");
app.use(cors());
// Parse incoming requests with JSON payloads
app.use(bodyParser.json());
// Parse incoming requests with urlencoded payloads
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/onetomany2pm").then(()=>{
    console.log("DB connected!!!");
})


app.use("/user", userRoute);







const Port=8080;
app.listen(Port, ()=>{
    console.log(`server run on  port ${Port}`);
})