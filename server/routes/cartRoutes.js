const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

// Add to cart
router.post("/", async (req, res) => {
  try {
    const { productId, name, price, image } = req.body;

    const newItem = new Cart({
      productId,
      name,
      price,
      image,
    });

    await newItem.save();
    res.status(201).json({ message: "Added to cart" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
