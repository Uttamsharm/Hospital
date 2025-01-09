const express = require('express');
const { addPatient, getAllPatients } = require('../controllers/patientController');
const router = express.Router();

router.post('/patients', addPatient);   // Add a patient
router.get('/patients', getAllPatients); // Get all patients

module.exports = router;
