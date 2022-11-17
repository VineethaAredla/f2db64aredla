const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
dog_Name: String,
age: Number,
price: Number
})
module.exports = mongoose.model("dog",dogSchema)