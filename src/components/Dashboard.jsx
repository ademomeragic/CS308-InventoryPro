import React from "react";

const Dashboard = () => {
  return (
    <div className="p-4">
      {/* Sales Activity */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-2">To be Packed</h2>
          <p>Your to-be-packed orders content here.</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-2">To be Shipped</h2>
          <p>Your to-be-shipped orders content here.</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-2">To be Delivered</h2>
          <p>Your to-be-delivered orders content here.</p>
        </div>
        <div className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-2">To be Invoiced</h2>
          <p>Your to-be-invoiced orders content here.</p>
        </div>
      </div>

      {/* Product Details and Top Selling Items */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        {/* Product Details */}
        <div className="flex-1 bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-4">Product Details</h2>
          <p>Your product details content here.</p>
        </div>

        {/* Top Selling Items */}
        <div className="flex-1 bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-semibold mb-4">Top Selling Items</h2>
          <p>Your top selling items content here.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
