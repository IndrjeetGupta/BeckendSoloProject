const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title : String,
    image : String,
    image1 : String,
    image2 : String,
    image3 : String,
    image4 : String,
    catrgory : String,
    color : String,
    price : String,
    materia : String,
    size : String,
    brake_type : String,
    wheel_size : String,
    model_year : String,
  
})

const ProductModel = mongoose.model("data", productSchema)

module.exports = {ProductModel}

