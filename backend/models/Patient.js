const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  diseases: [String],
  allergies: [String],
  roomNumber: String,
  bedNumber: String,
  floorNumber: String,
  age: Number,
  gender: String,
  contact: String,
  emergencyContact: String,
  dietChart: {
    morning: { meal: String, instructions: String },
    evening: { meal: String, instructions: String },
    night: { meal: String, instructions: String },
  },
});

module.exports = mongoose.model('Patient', PatientSchema);
