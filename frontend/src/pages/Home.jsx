import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Hospital Food Management System</h1>
        <p className="text-lg mb-6">
          Manage patient details, diet charts, pantry tasks, and food deliveries efficiently.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/patient-details"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Manage Patients
          </Link>
          <Link
            to="/pantry"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Pantry Dashboard
          </Link>
          <Link
            to="/delivery"
            className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
          >
            Delivery Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
