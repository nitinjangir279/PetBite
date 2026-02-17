const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

/* =========================
   MIDDLEWARES
========================= */
app.use(cors());
app.use(express.json());

/* =========================
   AUTH ROUTES (LOGIN SYSTEM)
========================= */
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

/* =========================
   EXTERNAL PET PRODUCTS API
========================= */
app.get("/api/external-products", async (req, res) => {
  try {
    const query = req.query.q || "dog";
    const limit = parseInt(req.query.limit) || 12;

    const url = `https://world.openpetfoodfacts.org/cgi/search.pl?search_terms=${query}&search_simple=1&action=process&json=1`;

    const response = await axios.get(url);

    const products = response.data.products
      .filter(item => item.product_name)
      .slice(0, limit)
      .map((item) => ({
        id: item.code || item.id,
        name: item.product_name,
        image:
          item.image_front_small_url ||
          "https://via.placeholder.com/300x200?text=No+Image",
        brand: item.brands || "Unknown Brand",
        quantity: item.quantity || "N/A"
      }));

    res.status(200).json({
      success: true,
      total: products.length,
      products
    });

  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Error fetching products"
    });
  }
});

/* =========================
   ROOT TEST ROUTE
========================= */
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

/* =========================
   DATABASE CONNECTION
========================= */
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("Mongo Error ❌", err.message));

/* =========================
   SERVER START
========================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});
