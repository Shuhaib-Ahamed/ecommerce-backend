const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true, unique: true },
    quantity: { type: Number, required: true },
    productDescription: { type: String, required: true },
    images: { type: Array, required: true },
    sku: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
