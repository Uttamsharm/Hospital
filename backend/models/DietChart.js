const mongoose = require("mongoose");

const DietChartSchema = new mongoose.Schema({
  meal: { type: String, required: true },
  calories: { type: Number, required: true },
  date: { type: Date, required: true },
  notes: { type: String }
});

module.exports = mongoose.model("DietChart", DietChartSchema);
