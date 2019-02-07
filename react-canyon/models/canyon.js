const mongoose = require("mongoose");

const canyonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  state: String,
  area: String,
  coordinates: String,
  rating :{
    type: String,
    required: true
  },
  minTime: String,
  maxTime: String,
  distance: String,
  totalRaps: Number,
  longestRap: String,
  description: String
});

module.exports = mongoose.model("Canyon", canyonSchema)
