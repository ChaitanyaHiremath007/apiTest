const mongoose = require("mongoose")

const DB = "mongodb+srv://chaitanyahiremath007:BayR8y3ynSWxgBXH@cluster0.3abaunt.mongodb.net/employees?retryWrites=true&w=majority"
mongoose.connect(DB,{
        // useCreateIndex:true,
        // useNewUrlParser:true,
        // useUnifiedTopology:true,


}).then(()=>{
    console.log("connection successfull")
}).catch((e)=>{
    console.log("No connection")
})


