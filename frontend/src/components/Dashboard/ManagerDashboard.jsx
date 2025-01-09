import React from 'react';

const ManagerDashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hospital Food Manager Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md p-4 rounded">
          <h2 className="font-semibold mb-2">Patient Details</h2>
          <p>Manage patient information, diseases, and diet charts.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded">
          <h2 className="font-semibold mb-2">Food Preparation</h2>
          <p>Track meal preparation and assign tasks to pantry staff.</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded">
          <h2 className="font-semibold mb-2">Delivery Status</h2>
          <p>Monitor meal delivery statuses and delays.</p>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
