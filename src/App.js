import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Inventory from "./components/Inventory";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full">
        <Navbar />
      </div>
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-7 overflow-auto">
          <Routes>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
