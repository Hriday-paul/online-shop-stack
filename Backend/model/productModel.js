const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema(
  {
    id: {
      type: String,
      required: true,
    },
    category : {
      type: String,
      required: true,
    },
    product_name: {
      type: String,
      required: true,
    },
    product_model: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    stock: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    createdAt : {
      type: String,
      required: true,
    }
  }
);

module.exports = productList = mongoose.model("productList", productSchema);
