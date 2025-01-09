const DeliveryPersonnel = require('../models/DeliveryPersonnel');
const mongoose = require('mongoose');

exports.assignDelivery = async (req, res) => {
  try {
    const { assignedMeals, ...otherFields } = req.body;

    // Convert patientId to ObjectId in assignedMeals
    const updatedAssignedMeals = assignedMeals.map((meal) => ({
      ...meal,
      patientId: new mongoose.Types.ObjectId(meal.patientId),
    }));

    const deliveryTask = new DeliveryPersonnel({
      ...otherFields,
      assignedMeals: updatedAssignedMeals,
    });

    await deliveryTask.save();
    res.status(201).json(deliveryTask);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateDeliveryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedDelivery = await DeliveryPersonnel.findByIdAndUpdate(
      id,
      { $set: { 'assignedMeals.$.status': status } },
      { new: true }
    );
    res.json(updatedDelivery);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
