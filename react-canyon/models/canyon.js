const mongoose = require("mongoose");

const canyonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating :{
    type: String,
    required: true
  },
  time: Number,
  distance: Number,
  raps: Number,
  description: String
});

module.exports = mongoose.model("Canyon", canyonSchema)
