const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  comment: String
});

module.exports = mongoose.model("Comment", commentsSchema)
