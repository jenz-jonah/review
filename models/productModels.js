const mongoose = require("mongoose")

//schema and model
const productschema =  mongoose.Schema({
  productname: String,
  tonnage: Number,
  type: String,
  date: Date,
  amount: Number,
})


module.exports = mongoose.model("product", productschema)

