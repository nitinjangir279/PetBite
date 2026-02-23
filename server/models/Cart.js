const mongoose=require("mongoose");

const cartSchema=new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
    },
    name:String,
    price:Number,
    image:String,
    quantity:{
        type:Number,
        default:1,
    },
});