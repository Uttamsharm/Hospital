import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the AppContext
const AppContext = createContext();

// AppProvider Component
export const AppProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);
  const [dietCharts, setDietCharts] = useState([]);
  const [pantryTasks, setPantryTasks] = useState([]);
  const [deliveryStatuses, setDeliveryStatuses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data fetch function (you can replace this with actual API calls)
  const fetchData = async () => {
    try {
      // Simulate API calls and set the data
      setPatients([
        {
          id: 1,
          name: 'John Doe',
          age: 45,
          gender: 'Male',
          roomNumber: '101',
          diseases: 'Diabetes',
          allergies: 'None',
          contactInfo: '1234567890',
        },
        {
          id: 2,
          name: 'Jane Smith',
          age: 36,
          gender: 'Female',
          roomNumber: '102',
          diseases: 'Hypertension',
          allergies: 'Peanuts',
          contactInfo: '9876543210',
        },
      ]);
      setDietCharts([
        {
          id: 1,
          patientId: 1,
          morning: 'Oats and Milk',
          evening: 'Salad',
          night: 'Grilled Chicken and Vegetables',
          instructions: 'Low sugar',
        },
        {
          id: 2,
          patientId: 2,
          morning: 'Fruit Smoothie',
          evening: 'Soup',
          night: 'Fish and Rice',
          instructions: 'No salt',
        },
      ]);
      setPantryTasks([
        { id: 1, task: 'Prepare Morning Meals', status: 'In Progress' },
        { id: 2, task: 'Prepare Night Meals', status: 'Pending' },
      ]);
      setDeliveryStatuses([
        { id: 1, patientId: 1, mealType: 'Morning', status: 'Delivered' },
        { id: 2, patientId: 2, mealType: 'Evening', status: 'Pending' },
      ]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Add a new patient
  const addPatient = (newPatient) => {
    setPatients([...patients, { id: patients.length + 1, ...newPatient }]);
  };

  // Update diet chart
  const updateDietChart = (updatedChart) => {
    setDietCharts(
      dietCharts.map((chart) =>
        chart.id === updatedChart.id ? updatedChart : chart
      )
    );
  };

  // Update pantry task status
  const updatePantryTask = (taskId, status) => {
    setPantryTasks(
      pantryTasks.map((task) =>
        task.id === taskId ? { ...task, status } : task
      )
    );
  };

  // Update delivery status
  const updateDeliveryStatus = (deliveryId, status) => {
    setDeliveryStatuses(
      deliveryStatuses.map((delivery) =>
        delivery.id === deliveryId ? { ...delivery, status } : delivery
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        patients,
        dietCharts,
        pantryTasks,
        deliveryStatuses,
        loading,
        addPatient,
        updateDietChart,
        updatePantryTask,
        updateDeliveryStatus,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the AppContext
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
