import React, { createContext, useState, useEffect } from "react";

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
      const initialInventory = [
        { name: "Item 1", quantity: 10 },
        { name: "Item 2", quantity: 5 },
      ];
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
