const express = require("express");
const router = express.Router();
const axios = require("axios");

// GET external API pet food products
router.get("/", async (req, res) => {
  try {
    const query = req.query.q || "pet"; // default query if none
    const externalUrl = `https://world.openpetfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1`;

    const response = await axios.get(externalUrl);
    // Return some simplified fields
    const products = response.data.products.map((p) => ({
      id: p.id || p.code,
      name: p.product_name || "Unknown Product",
      image: p.image_front_small_url || "",
      brand: p.brands || "Unknown Brand",
      quantity: p.quantity || "",
    }));

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "External API fetch error" });
  }
});

module.exports = router;
