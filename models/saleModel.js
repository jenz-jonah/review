const mongoose = require("mongoose")

//schema and model
const saleschema =  mongoose.Schema({
  customer: String,
  product: String,
  accounttype: String,
  tonnage: Number,
  price: Number,
  amount: Number,
})
module.exports = mongoose.model("sale", saleschema)

