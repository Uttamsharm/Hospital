const PantryStaff = require('../models/PantryStaff');

exports.addPantryStaff = async (req, res) => {
  try {
    const pantryStaff = new PantryStaff(req.body);
    await pantryStaff.save();
    res.status(201).json(pantryStaff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllPantryStaff = async (req, res) => {
  try {
    const pantryStaff = await PantryStaff.find();
    res.json(pantryStaff);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
