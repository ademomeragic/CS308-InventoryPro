const router = require("express").Router();
let Inventory = require("../models/inventory.model");

// Utility function to generate a 6-digit ID
const generateId = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

router.route("/").get((req, res) => {
  Inventory.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const _id = generateId(); // Generate 6-digit ID
  const name = req.body.name;
  const dateAdded = Date.parse(req.body.dateAdded);
  const quantity = Number(req.body.quantity);
  const productGroup = req.body.productGroup;

  const newItem = new Inventory({
    _id,
    name,
    dateAdded,
    quantity,
    productGroup,
  });

  newItem
    .save()
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:_id").delete((req, res) => {
  Inventory.findByIdAndDelete(req.params._id)
    .then(() => res.json("Item deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
