import React, { createContext, useState, useEffect } from "react";
import { sortByDate } from "../util/dates";
import uuid from "react-uuid";

// Create the context
export const InventoryContext = createContext();
// Define the context provider component
export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchInventory = async () => {
      setLoading(true);
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // Example data
      const initialInventory = sortByDate([
        { id: uuid(), name: "Item 1", quantity: 10, status: 'packed', date: new Date() },
        { id: uuid(), name: "Item 2", quantity: 5, status: 'packed', date: new Date() },
      ]);
      setInventory(initialInventory);
      setLoading(false);
    };

    fetchInventory();
  }, []);

  return (
    <InventoryContext.Provider value={{ inventory, loading, setInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};
