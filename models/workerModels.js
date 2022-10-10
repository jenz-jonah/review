const mongoose = require("mongoose")

//schema and model
const workerSchema =  mongoose.Schema({
  name: String,
  age: Number,
  field: String,
  salary: Number,
})
const worker = mongoose.models['worker'] || mongoose.model("worker", workerSchema);


