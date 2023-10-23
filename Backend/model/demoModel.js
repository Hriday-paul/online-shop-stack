const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const demoSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  }
);

module.exports = testDemo = mongoose.model("testDemo", demoSchema);
