const express = require("express");
const app = express();
require("../src/db/conn")
const EmpData = require("../src/models/emp")
const port = process.env.PORT || 3000;

app.use(express.json())

app.post("/emps", async(req,res)=>{
    try{
        const data = new EmpData(req.body)
        // console.log(req.body)
        const EmployeeData = await data.save()
        res.send(EmployeeData);
        
    }catch(e){
        res.send(e)
    }
})
app.get("/emps", async(req,res)=>{
    try{
        const getEmp = await EmpData.find({})
        
        res.status(201).send(getEmp);
        console.log(getEmp)
        
    }catch(e){
        res.status(400).send(e)
    }
})


app.get("/",(req,res)=>{
    res.send("hello from chaitanya welcome to my website .")
})


app.listen(port,()=>{
    console.log(`connection successfull on port ${port}`)
})