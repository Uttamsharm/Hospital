const mongoose = require('mongoose');

const PantryStaffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  location: String,
});

module.exports = mongoose.model('PantryStaff', PantryStaffSchema);
