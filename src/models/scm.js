const mongoose = require('mongoose')

const scchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true
    },
    firstName:{
        type:String
    },
    LastName:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    Password:{
        type:String
    },
    Confirm_Password:{
        type:String
    }
})
const Regis = new mongoose.model("recent",scchema)
 module.exports = Regis;