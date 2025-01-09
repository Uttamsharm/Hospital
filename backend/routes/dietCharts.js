const express = require("express");
const DietChart = require("../models/DietChart");
const router = express.Router();

// Create a new diet chart
router.post("/", async (req, res) => {
  try {
    const newChart = new DietChart(req.body);
    const savedChart = await newChart.save();
    res.status(201).json(savedChart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all diet charts
router.get("/", async (req, res) => {
  try {
    const charts = await DietChart.find();
    res.status(200).json(charts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a diet chart
router.put("/:id", async (req, res) => {
  try {
    const updatedChart = await DietChart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedChart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a diet chart
router.delete("/:id", async (req, res) => {
  try {
    await DietChart.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Chart deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
