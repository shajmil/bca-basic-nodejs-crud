const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
  {
    prodname: {
      type: String,
      required: true,
    },
    prodprice: {
      type: Number,
      required: true,
    },
    prodqty: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = new mongoose.model('Product', ProductSchema);
