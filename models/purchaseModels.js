const mongoose = require("mongoose")
//the name of the input must be the same as the schema
//schema and model
const purchaseSchema =  mongoose.Schema({
    producename: String,
    nameofbuyer: String,
    salesagent: String,
    tonnage: Number,
    date: Date,
    time: Number,
    amountPaid: Number,
   
})

module.exports = mongoose.model("purchase", purchaseSchema)  
