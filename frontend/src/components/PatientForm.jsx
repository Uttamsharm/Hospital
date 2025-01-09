import React, { useState } from 'react';

const PatientForm = ({ onSubmit }) => {
  const [patient, setPatient] = useState({
    name: '',
    diseases: '',
    allergies: '',
    roomNumber: '',
    bedNumber: '',
    floorNumber: '',
    age: '',
    gender: '',
    contact: '',
    emergencyContact: '',
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(patient);
    setPatient({
      name: '',
      diseases: '',
      allergies: '',
      roomNumber: '',
      bedNumber: '',
      floorNumber: '',
      age: '',
      gender: '',
      contact: '',
      emergencyContact: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-4 rounded space-y-4">
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={patient.name}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div>
        <label className="block text-gray-700">Diseases</label>
        <input
          type="text"
          name="diseases"
          value={patient.diseases}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div>
        <label className="block text-gray-700">Allergies</label>
        <input
          type="text"
          name="allergies"
          value={patient.allergies}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      {/* Add additional fields as needed */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  );
};

export default PatientForm;
