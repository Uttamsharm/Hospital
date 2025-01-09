import React, { useEffect, useState } from 'react';
import ApiService from '../../services/api';

const DeliveryDashboard = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDeliveryStatuses = async () => {
      try {
        const data = await fetchDeliveryStatuses();
        setDeliveries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getDeliveryStatuses();
  }, []);

  const handleDeliveryUpdate = async (deliveryId) => {
    try {
      await updateDeliveryStatus(deliveryId, 'Delivered');
      setDeliveries((prevDeliveries) =>
        prevDeliveries.map((delivery) =>
          delivery.id === deliveryId ? { ...delivery, status: 'Delivered' } : delivery
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
      <h1 className="text-2xl font-bold text-center mb-4">Delivery Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deliveries.map((delivery) => (
          <div
            key={delivery.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
          >
            <h2 className="text-lg font-semibold">{delivery.foodName}</h2>
            <p>Patient: {delivery.patientName}</p>
            <p>Room: {delivery.roomNumber}</p>
            <p>Status: {delivery.status}</p>
            {delivery.status !== 'Delivered' && (
              <button
                onClick={() => handleDeliveryUpdate(delivery.id)}
                className="bg-green-500 text-white py-1 px-4 rounded-lg mt-4 hover:bg-green-600"
              >
                Mark as Delivered
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryDashboard;
