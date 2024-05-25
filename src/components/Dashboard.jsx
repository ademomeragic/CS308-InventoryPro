import React from "react";
import { LuFileImage } from "react-icons/lu";

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-7 text-light-blue">
        Hello Adem Omeragic!
      </h2>
      <div className="bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)] rounded-2xl pb-8 px-8 mb-10">
        <div className="font-bold text-light-blue text-center text-2xl pb- py-3">
          Sales Activity
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-0">
          <div className="bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)] rounded-2xl p-6 text-center border-2 border-blue-600">
            <h3 className="text-lg font-semibold">Qty</h3>
            <p className="text-2xl font-bold text-blue-600">51</p>
            <p className="text-gray-500">To be packed</p>
          </div>
          <div className="bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)] rounded-2xl p-6 text-center border-2 border-red-600">
            <h3 className="text-lg font-semibold">Qty</h3>
            <p className="text-2xl font-bold text-red-600">40</p>
            <p className="text-gray-500">To be shipped</p>
          </div>
          <div className="bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)] rounded-2xl p-6 text-center border-2 border-yellow-600">
            <h3 className="text-lg font-semibold">Qty</h3>
            <p className="text-2xl font-bold text-yellow-600">150</p>
            <p className="text-gray-500">To be delivered</p>
          </div>
          <div className="bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)] rounded-2xl p-6 text-center border-2 border-green-600">
            <h3 className="text-lg font-semibold">Qty</h3>
            <p className="text-2xl font-bold text-green-600">232</p>
            <p className="text-gray-500">To be invoiced</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-10">
        <div className="bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)] rounded-2xl px-8 py-4">
          <h3 className="text-xl font-bold mb-6 mt-0 text-light-blue text-center">
            Product Details
          </h3>
          <p className="mb-3">
            <span className="font-bold text-red-600">Low Stock Items:</span> 31
          </p>
          <p className="mb-3">
            <span className="font-bold">All Groups:</span> 36
          </p>
          <p className="mb-3">
            <span className="font-bold">All Products:</span> 221
          </p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-2">Active Products</h4>
            <div className="relative pt-1">
              <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-green-200">
                <div
                  style={{ width: "63%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-600"
                ></div>
              </div>
              <p className="text-center font-bold">63%</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)] rounded-2xl p-4">
          <h3 className="text-xl font-bold mb-4 text-center text-light-blue">
            Top Selling Items
          </h3>
          <div className="flex justify-between items-center space-x-4 p-7">
            <div className="flex items-center flex-col">
              <div className="p-2 rounded-lg mb-2">
                <LuFileImage className="w-20 h-20 stroke-1" />
              </div>
              <div className="text-center">
                <p className="font-semibold">Day Cream</p>
                <p className="text-gray-500 text-sm pt-1">Sold: 345 Qty</p>
              </div>
            </div>
            <div className="flex items-center flex-col">
              <div className="p-2 rounded-lg mb-2">
                <LuFileImage className="w-20 h-20 stroke-1" />
              </div>
              <div className="text-center">
                <p className="font-semibold">Night Cream</p>
                <p className="text-gray-500 text-sm pt-1">Sold: 328 Qty</p>
              </div>
            </div>
            <div className="flex items-center flex-col">
              <div className=" p-2 rounded-lg mb-2">
                <LuFileImage className="w-20 h-20 stroke-1" />
              </div>
              <div className="text-center">
                <p className="font-semibold">Eye Cream</p>
                <p className="text-gray-500 text-sm pt-1">Sold: 256 Qty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
