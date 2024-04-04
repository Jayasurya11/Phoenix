const express=require("express");
const mongoose=require("mongoose");
mongoose.connect().then(()=>console.log("Mongdb connected")).catch(err=>console.log(err))