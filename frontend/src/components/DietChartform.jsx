import React, { useState } from 'react';

const DietChartForm = ({ onSubmit }) => {
  const [dietChart, setDietChart] = useState({
    morning: '',
    evening: '',
    night: '',
    instructions: '',
  });

  const handleChange = (e) => {
    setDietChart({ ...dietChart, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(dietChart);
    setDietChart({ morning: '', evening: '', night: '', instructions: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-4 rounded space-y-4">
      <div>
        <label className="block text-gray-700">Morning Meal</label>
        <input
          type="text"
          name="morning"
          value={dietChart.morning}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div>
        <label className="block text-gray-700">Evening Meal</label>
        <input
          type="text"
          name="evening"
          value={dietChart.evening}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div>
        <label className="block text-gray-700">Night Meal</label>
        <input
          type="text"
          name="night"
          value={dietChart.night}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
        />
      </div>
      <div>
        <label className="block text-gray-700">Instructions</label>
        <textarea
          name="instructions"
          value={dietChart.instructions}
          onChange={handleChange}
          className="border rounded w-full py-2 px-3"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Save
      </button>
    </form>
  );
};

export default DietChartForm;
