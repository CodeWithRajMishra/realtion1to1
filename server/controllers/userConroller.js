const UserModel = require("../models/userModel");
const ProfileModel= require("../models/profileModel");
const dataSave=async(req, res)=>{
    const {username, email, firstname, lastname } = req.body;
    const User = await UserModel.create({
          username:username,
          email:email
    })
   const Profile = await ProfileModel.create({
      firstname:firstname, 
      lastname: lastname, 
      userid: User._id
   })
   res.send("Data save!!!");

}


const dataDisplay=async(req, res)=>{
    console.log("OKKKK")
     const MyData= await ProfileModel.find().populate("userid");
     res.send(MyData);
}

module.exports ={
    dataSave,
    dataDisplay
}