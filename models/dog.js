const mongoose = require("mongoose")
const dogSchema = mongoose.Schema({
    dog_Name: {type:String,minLength:3},
    dog_age: {type:Number, min:10, max:1000},
    dog_price: {type:Number, min:10, max:1000}
})

module.exports = mongoose.model("dog",dogSchema)