const express = require("express");
const PantryTask = require("../models/PantryTask");
const router = express.Router();

// Create a new pantry task
router.post("/", async (req, res) => {
  try {
    const newTask = new PantryTask(req.body);
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all pantry tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await PantryTask.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a pantry task
router.put("/:id", async (req, res) => {
  try {
    const updatedTask = await PantryTask.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a pantry task
router.delete("/:id", async (req, res) => {
  try {
    await PantryTask.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
