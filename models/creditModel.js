const mongoose = require("mongoose")
//the name of the input must be the same as the schema
//schema and model
const creditSchema =  mongoose.Schema({
    BuyerName: String,
    TypeofProduce :String,
    AgentName :String,
    Contact: String,
    DueDate: Number,
    Location: String,
    Tonnage: Number,
    ProduceName: String,
    NationalIdNin: Number,
    DateOfDispatch: Number,
    AmountDue: Number,
    
})


module.exports = mongoose.model("credit", creditSchema)
