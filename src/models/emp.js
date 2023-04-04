const express = require("express");
const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
    empID:{
        type:Number,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,

    },
    desgination:{
        type:String,
        required:true,
        
    },
    phone:{
        type:Number,
        required:true,
        
    }
})

const EmpData = new mongoose.model("EmpData", empSchema )
module.exports = EmpData;