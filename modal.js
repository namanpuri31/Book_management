const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/namandb")

const bookschema = new mongoose.Schema({
    title: {
        type:String,
    },
    author: {
        type: String,
    },
    summary: {
        type: String,
    }
        
})

const modal=mongoose.model("studata",bookschema);

module.exports=modal