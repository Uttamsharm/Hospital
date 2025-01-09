import React, { useState, useEffect } from 'react';
import ApiService from '../services/api';

const PatientDetails = () => {
  const [patients, setPatients] = useState([]);
  const [newPatient, setNewPatient] = useState({
    name: '',
    age: '',
    gender: '',
    roomNumber: '',
    diseases: '',
    allergies: '',
    contactInfo: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPatients = async () => {
      try {
        const data = await fetchPatients();
        setPatients(data);
      } catch (err) {
        setError('Error fetching patient details.');
      } finally {
        setLoading(false);
      }
    };

    getPatients();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPatient({ ...newPatient, [name]: value });
  };

  const handleAddPatient = async () => {
    try {
      const addedPatient = await addPatient(newPatient);
      setPatients([...patients, addedPatient]);
      setNewPatient({
        name: '',
        age: '',
        gender: '',
        roomNumber: '',
        diseases: '',
        allergies: '',
        contactInfo: '',
      });
    } catch (err) {
      setError('Error adding patient.');
    }
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Patient Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((patient) => (
          <div key={patient.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{patient.name}</h2>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            <p>Room: {patient.roomNumber}</p>
            <p>Diseases: {patient.diseases}</p>
            <p>Allergies: {patient.allergies}</p>
            <p>Contact: {patient.contactInfo}</p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-4">Add New Patient</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={newPatient.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="age"
            value={newPatient.age}
            onChange={handleInputChange}
            placeholder="Age"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="gender"
            value={newPatient.gender}
            onChange={handleInputChange}
            placeholder="Gender"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="roomNumber"
            value={newPatient.roomNumber}
            onChange={handleInputChange}
            placeholder="Room Number"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="diseases"
            value={newPatient.diseases}
            onChange={handleInputChange}
            placeholder="Diseases"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="allergies"
            value={newPatient.allergies}
            onChange={handleInputChange}
            placeholder="Allergies"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="contactInfo"
            value={newPatient.contactInfo}
            onChange={handleInputChange}
            placeholder="Contact Info"
            className="border p-2 rounded"
          />
        </div>
        <button
          onClick={handleAddPatient}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600"
        >
          Add Patient
        </button>
      </div>
    </div>
  );
};

export default PatientDetails;
