import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PatientDetails from "./pages/PatientDetails";
import Pantry from "./pages/Pantry";
import Delivery from "./pages/Delivery";
import ManagerDashboard from "./components/Dashboard/ManagerDashboard";
import PantryDashboard from "./components/Dashboard/PantryDashboard";
import DeliveryDashboard from "./components/Dashboard/DeliveryDashboard";

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-blue-600 text-white py-4">
          <h1 className="text-center text-2xl font-bold">Hospital Food Management System</h1>
        </header>
        <main className="p-4">
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/patient-details/:id" element={<PatientDetails />} />
            <Route path="/pantry" element={<Pantry />} />
            <Route path="/pantry-dashboard" element={<PantryDashboard />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/delivery-dashboard" element={<DeliveryDashboard />} />
            <Route path="/manager-dashboard" element={<ManagerDashboard />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-4 text-center">
          <p>&copy; 2025 Hospital Food Management System. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
