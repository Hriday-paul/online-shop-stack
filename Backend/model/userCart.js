const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = Schema(
    {
        id: {
          type: String,
          required: true,
        },
        product_model: {
          type: String,
          required: true,
        },
        stock: {
          type: Number,
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
        email : {
            type: String,
            required: true,
          },
        quantity : {
            type: Number,
        }
        
      }
  );

  module.exports = UserCarts = mongoose.model("UserCarts", cartSchema);