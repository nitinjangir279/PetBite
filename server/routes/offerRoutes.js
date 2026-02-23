const express=require("express");
const router=express.Router();
const Product=require("../models/Product");

router.get("/",async(req,res)=>{
    try{
        const page=parseInt(req.query.page)||1;
        const limit = parseInt(req.query.limit)||9;

        const skip=(page-1)*limit;

        const products = await Product.fing({ isOffer:true})
        .skip(skip)
        .limit(limit);

        const total = await Product.countDocuments({ isOffer:true });

        res.json({
            products,
            totalPages:Math.ceil(total/limit),
        })
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

module.exports=router;