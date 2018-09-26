var mongoose = require("mongoose")
const googleClass = new mongoose.Schema({
    name:String,
    age:Number,
    desc:String,
})

const googleModel = mongoose.model("class",googleClass,"class")

module.exports = googleModel