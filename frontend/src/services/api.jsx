import axios from 'axios';

// Base API URL (replace with your actual backend URL)
const BASE_URL = 'http://localhost:4000/api'; // Update this URL

// Axios instance for default configuration
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper functions for API requests
const ApiService = {
  // Patients
  getPatients: async () => {
    try {
      const response = await api.get('/patients');
      return response.data;
    } catch (error) {
      console.error('Error fetching patients:', error);
      throw error;
    }
  },
  addPatient: async (patientData) => {
    try {
      const response = await api.post('/patients', patientData);
      return response.data;
    } catch (error) {
      console.error('Error adding patient:', error);
      throw error;
    }
  },
  updatePatient: async (patientId, updatedData) => {
    try {
      const response = await api.put(`/patients/${patientId}`, updatedData);
      return response.data;
    } catch (error) {
      console.error('Error updating patient:', error);
      throw error;
    }
  },
  deletePatient: async (patientId) => {
    try {
      const response = await api.delete(`/patients/${patientId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting patient:', error);
      throw error;
    }
  },

  // Diet Charts
  getDietCharts: async () => {
    try {
      const response = await api.get('/diet-charts');
      return response.data;
    } catch (error) {
      console.error('Error fetching diet charts:', error);
      throw error;
    }
  },
  addDietChart: async (dietChartData) => {
    try {
      const response = await api.post('/diet-charts', dietChartData);
      return response.data;
    } catch (error) {
      console.error('Error adding diet chart:', error);
      throw error;
    }
  },
  updateDietChart: async (dietChartId, updatedData) => {
    try {
      const response = await api.put(`/diet-charts/${dietChartId}`, updatedData);
      return response.data;
    } catch (error) {
      console.error('Error updating diet chart:', error);
      throw error;
    }
  },
  deleteDietChart: async (dietChartId) => {
    try {
      const response = await api.delete(`/diet-charts/${dietChartId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting diet chart:', error);
      throw error;
    }
  },

  // Pantry Tasks
  getPantryTasks: async () => {
    try {
      const response = await api.get('/pantry-tasks');
      return response.data;
    } catch (error) {
      console.error('Error fetching pantry tasks:', error);
      throw error;
    }
  },
  updatePantryTaskStatus: async (taskId, status) => {
    try {
      const response = await api.patch(`/pantry-tasks/${taskId}`, { status });
      return response.data;
    } catch (error) {
      console.error('Error updating pantry task status:', error);
      throw error;
    }
  },

  // Delivery
  getDeliveryStatuses: async () => {
    try {
      const response = await api.get('/deliveries');
      return response.data;
    } catch (error) {
      console.error('Error fetching delivery statuses:', error);
      throw error;
    }
  },
  updateDeliveryStatus: async (deliveryId, status) => {
    try {
      const response = await api.patch(`/deliveries/${deliveryId}`, { status });
      return response.data;
    } catch (error) {
      console.error('Error updating delivery status:', error);
      throw error;
    }
  },
};

export default ApiService;
