import React, { useContext, useState } from "react";
import { InventoryContext } from "./InventoryContext";

const Inventory = () => {
  const { inventory, loading, setInventory } = useContext(InventoryContext);
  const [newItem, setNewItem] = useState({ name: "", quantity: 0 });

  const addItem = (e) => {
    e.preventDefault();
    if (newItem.name.trim() === "" || newItem.quantity <= 0) {
      alert("Please enter a valid name and quantity.");
      return;
    }
    const updatedInventory = [...inventory, newItem];
    setInventory(updatedInventory);
    setNewItem({ name: "", quantity: 0 });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Inventory</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Add New Item</h3>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          placeholder="Item Name"
          aria-label="Item Name"
        />
        <input
          type="number"
          value={newItem.quantity}
          onChange={(e) =>
            setNewItem({ ...newItem, quantity: +e.target.value })
          }
          placeholder="Quantity"
          aria-label="Quantity"
          min="0"
        />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default Inventory;
