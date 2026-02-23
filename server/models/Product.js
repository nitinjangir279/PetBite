const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String,
    isOffer:{
        type:Boolean,
        default:false,
    }
})
module.exports=mongoose.model("Product",productSchema);