const express = require('express');
const { addPantryStaff, getAllPantryStaff } = require('../controllers/pantryController');
const router = express.Router();

router.post('/pantry-staff', addPantryStaff);  // Add pantry staff
router.get('/pantry-staff', getAllPantryStaff); // Get all pantry staff

module.exports = router;
