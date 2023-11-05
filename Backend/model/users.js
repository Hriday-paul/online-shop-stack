const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        password : {
            type: String,
        },
        createdAt : {
            type: String,
          },
        profile_pic: {
            data: Buffer,
            contentType: String,
        },
    }
);

module.exports = users = mongoose.model("users", userSchema);