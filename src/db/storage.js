const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Registration",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Sucessful");
}).catch((e)=>{
    console.log("Connection Unsucessful");
})


