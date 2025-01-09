const mongoose = require('mongoose');

const DeliveryPersonnelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  assignedMeals: [
    {
      patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
      status: { type: String, default: 'Pending' },
      deliveryTime: Date,
    },
  ],
});

module.exports = mongoose.model('DeliveryPersonnel', DeliveryPersonnelSchema);
