import React, { useEffect, useState } from 'react';
import ApiService from '../../services/api'; // Adjusted path

const PantryDashboard = () => {
  const [pantryTasks, setPantryTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPantryDetails = async () => {
      try {
        const data = await ApiService.getPantryTasks(); // Use the correct method from ApiService
        setPantryTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPantryDetails();
  }, []);

  const handleTaskUpdate = async (taskId, updatedStatus) => {
    try {
      await ApiService.updatePantryTaskStatus(taskId, updatedStatus); // Use the correct method
      setPantryTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId ? { ...task, status: updatedStatus } : task
        )
      );
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-4">Pantry Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pantryTasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold">{task.foodName}</h2>
            <p>Assigned to: {task.staffName}</p>
            <p>Status: {task.status}</p>
            <div className="mt-4">
              <button
                onClick={() => handleTaskUpdate(task.id, 'In Progress')}
                className="bg-blue-500 text-white py-1 px-4 rounded-lg mr-2 hover:bg-blue-600"
              >
                In Progress
              </button>
              <button
                onClick={() => handleTaskUpdate(task.id, 'Completed')}
                className="bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600"
              >
                Mark as Completed
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PantryDashboard;
