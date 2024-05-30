const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inventorySchema = new Schema(
  {
    _id: { type: String, required: true },
    name: { type: String, required: true },
    dateAdded: { type: Date, required: true },
    quantity: { type: Number, required: true },
    productGroup: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Inventory = mongoose.model("Inventory", inventorySchema);

module.exports = Inventory;
