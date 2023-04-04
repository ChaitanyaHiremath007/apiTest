const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://chaitanyahiremath007:BayR8y3ynSWxgBXH@cluster0.3abaunt.mongodb.net/employees?retryWrites=true&w=majority",{
        // useCreateIndex:true,
        // useNewUrlParser:true,
        // useUnifiedTopology:true,


}).then(()=>{
    console.log("connection successfull")
}).catch((e)=>{
    console.log("No connection")
})


