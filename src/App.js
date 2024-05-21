import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <div className="w-full">
        <Navbar />
      </div>
      <Sidebar />
    </div>
  );
};

export default App;
