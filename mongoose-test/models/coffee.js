const mongoose = require("mongoose");

const coffeeSchema = new mongoose.Schema({
  origin: String,
  style: {
    type: String,
    required: true,
    enum:["Italian", "British", "Tuscan", "French", "Colobian"]
  },
  price: Number,
  decaf: Boolean,
  additives: [{
    kind: String,
    amount: Number
  }]
});

module.exports = mongoose.model("Coffe", coffeeSchema)
