const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const contactSchema = new mongoose.Schema({
    fullname: {
    type:String,
    trim:true,
  },
  
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
  },
  phone:{
    type:String,
    trim:true,
  
  },
 message:{
    type:String,
    trim:true,
  
  },
  
  

});
contactSchema.plugin(passportLocalMongoose, { fullnameField: "email" });

module.exports = mongoose.model("Contact", contactSchema);