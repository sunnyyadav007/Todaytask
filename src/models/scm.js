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
    },
    access_token:{
        type:String,
        
    }
})

const schema2 = new mongoose.Schema({
    user_id:{
        type:String,
        require:true,
        unique:true
    },
    Address:{type:mongoose.Schema.Types.ObjectId,ref: 'Adressschema'},
    City:{
        type:String,
    },
    State:{
        type:String
    },
    PinCode:{
        type:String
    },
    PhoneNo :{
        type:String
    }
})

const addressSchema = new mongoose.Schema({
    houseNo:{
        type:String,
    },
    street:{
        type:String
    }
    ,
    city:{
        type:String
    },

})
const Adressschema = new mongoose.model("Adressstore",addressSchema)
const Addrs = new mongoose.model("details",schema2)

const Regis = new mongoose.model("recent",scchema)



 module.exports = Regis;
 module.exports = Addrs;
 module.exports =  Adressschema;