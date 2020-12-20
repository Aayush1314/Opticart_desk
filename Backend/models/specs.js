const mongoose = require("mongoose")

const specsSchema = new mongoose.Schema({
    ProductCategory:{
        type:String,
        required: "Product Category is mandatory"
    },

    Category:{
        type:String,
    },

    Gender: {
        type: String,
    },

    Color:{
        type: String,
        required: "Color of lens/frame is required"
    },

    Price:{
        type:Number,
        required:"Price is Required"
    },

    Company: {
        type: String,
        required:"Company is Required"
    },

    Style: {
        type: String,
    }
    
})

module.exports = mongoose.model("spec", specsSchema)