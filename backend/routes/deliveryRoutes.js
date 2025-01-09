const express = require('express');
const { assignDelivery, updateDeliveryStatus } = require('../controllers/deliveryController');
const router = express.Router();

router.post('/assign-delivery', assignDelivery);       // Assign a delivery task
router.put('/update-delivery/:id', updateDeliveryStatus); // Update delivery status

module.exports = router;
