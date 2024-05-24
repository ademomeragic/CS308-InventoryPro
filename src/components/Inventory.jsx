import React, { useContext, useState } from "react";
import { InventoryContext } from "./InventoryContext";
import { formatDate } from "../util/dates";
import uuid from "react-uuid";

const Inventory = () => {
  const { inventory, loading, setInventory } = useContext(InventoryContext);
  const [newItem, setNewItem] = useState({ id: '', name: "", quantity: 0, date: formatDate(new Date()) });

  const addItem = (e) => {
    e.preventDefault();
    if (newItem.name.trim() === "" || newItem.quantity <= 0) {
      alert("Please enter a valid name and quantity.");
      return;
    }
    const updatedInventory = [...inventory, {...newItem, id: uuid() }];
    console.log(updatedInventory);
    setInventory(updatedInventory);
    setNewItem({ id: '', name: "", quantity: 0, date: formatDate(new Date()) });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 bg-white shadow-[0px_2px_10px_0px_rgba(0,0,0,0.3)] rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Inventory</h2>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {inventory.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="text-xl font-bold mt-6 mb-4">Add New Item</h3>
      <form onSubmit={addItem} className="space-y-4">
        <div>
          <input
            type="text"
            value={newItem.name}
            onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            placeholder="Item Name"
            aria-label="Item Name"
            className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="number"
            value={newItem.quantity}
            onChange={(e) =>
              setNewItem({ ...newItem, quantity: +e.target.value })
            }
            placeholder="Quantity"
            aria-label="Quantity"
            min="0"
            className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="date"
            value={newItem.date}
            onChange={(e) => {
              setNewItem({ ...newItem, date: e.target.value })
            }
            }
            placeholder="Date"
            aria-label="Date"
            className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default Inventory;