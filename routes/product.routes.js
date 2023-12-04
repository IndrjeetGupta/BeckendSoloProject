const express = require("express")
const {ProductModel} = require("../models/Product.model");
const { UserModel } = require("../models/User.model");

const productRouter = express.Router();

productRouter.get("/", async (req, res) => {
  const {catrgory} = req.query
  if(catrgory){
    console.log("Category is "+ catrgory);
    return res.send(catrgory)
  }else{
    console.log("Not found");
    return res.send("Opps")
  }
    // const products =  await ProductModel.find({})
    // res.send({products : products})
})



productRouter.post("/create", async (req, res) => {
    const {title, image,image1,image2,image3,image4
        ,catrgory,color,price,materia,size,brake_type,wheel_size,model_year
    
    } = req.body;

    const userID = req.userID;

    const user = await UserModel.findOne({_id : userID})
    const authorEmail = user.email

    const products =  await ProductModel.create({title, image,image1,image2,image3,image4
        ,catrgory,color,price,materia,size,brake_type,wheel_size,model_year
    
    })
    res.send({products : products})
})

productRouter.patch("/edit/:productID", async (req, res) => {
    const productID = req.params.productID

    const userID = req.userID;
    const user = await UserModel.findOne({_id : userID})
    const userEmail = user.email

    const payload = req.body

    await ProductModel.findOneAndUpdate({_id : productID}, payload)
    res.send({message : `Product item ${productID} updated`})
})


productRouter.delete("/delete/:productID", async (req, res) => {
    const productID = req.params.productID

    const userID = req.userID;
    const user = await UserModel.findOne({_id : userID})
    const userEmail = user.email

    await ProductModel.findOneAndDelete({_id : productID})
    res.send({message : `Product item  ${productID} deleted`})
})

// productRouter.get("/:catrgory", async (req, res) => {
//   let products = [];
//   const catrgory = req.params.catrgory;
//   console.log(catrgory);
//   if (catrgory === "Kid") {
//     products = await ProductModel.find({ catrgory: "Kid" });
//   } else if (catrgory === "Off_roading") {
//     products = await ProductModel.find({ catrgory: "Off_roading" });
//   } else if (catrgory === "Electric") {
//     products = await ProductModel.find({ catrgory: "Electric" });
//   }
//   if (products.length > 0) {
//     res.json({ status: "success", data: products });
//   } else {
//     res.json({ status: "Invalid Request No Data Found", data: products });
//   }
// });



module.exports = {productRouter}