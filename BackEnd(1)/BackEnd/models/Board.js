// models/Board.js
const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  username: String,
  roomId: String,
  dataURL: String, // saved canvas as base64
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Board", boardSchema);
