import React, { useState, useEffect } from "react";
import axios from "axios";

// InventoryItem component
const InventoryItem = ({ item, onDelete }) => {
  return (
    <tr className="border-b">
      <td className="px-4 py-2 text-center">{item.name}</td>
      <td className="px-4 py-2 text-center">{item._id}</td> {/* Display _id */}
      <td className="px-4 py-2 text-center">
        {new Date(item.dateAdded).toLocaleDateString()}
      </td>
      <td className="px-4 py-2 text-center">{item.quantity}</td>
      <td className="px-4 py-2 text-center">{item.productGroup}</td>
      <td className="px-4 py-2 text-center">
        <button
          onClick={() => onDelete(item._id)} // Use _id for deletion
          className="bg-red-500 hover:bg-red-400 text-white px-2 py-1 rounded-xl"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

// Inventory component
const Inventory = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({
    name: "",
    dateAdded: "",
    quantity: "",
    productGroup: "",
  });

  const [sortKey, setSortKey] = useState("");

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const addItem = () => {
    if (
      !newItem.name ||
      !newItem.dateAdded ||
      !newItem.quantity ||
      !newItem.productGroup
    ) {
      alert("Please fill out all fields");
      return;
    }

    const date = new Date(newItem.dateAdded);
    if (isNaN(date)) {
      alert("Invalid date format");
      return;
    }

    // Add the new item to the database
    axios
      .post("http://localhost:5000/inventory/add", newItem)
      .then((response) => {
        const newItemData = {
          ...newItem,
          _id: response.data._id, // Ensure _id is used here
          dateAdded: date,
        };
        setItems([...items, newItemData]);
        setNewItem({
          name: "",
          dateAdded: "",
          quantity: "",
          productGroup: "",
        });
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
  };

  const deleteItem = (id) => {
    const itemToDelete = items.find((item) => item._id === id);
    if (!itemToDelete) {
      console.error("Item not found for deletion");
      return;
    }

    if (
      window.confirm(
        `Are you sure you want to delete product ${itemToDelete.name}?`
      )
    ) {
      console.log("Deleting item with ID:", id);
      // Delete the item from the database
      axios
        .delete(`http://localhost:5000/inventory/${id}`)
        .then(() => {
          setItems(items.filter((item) => item._id !== id));
        })
        .catch((error) => {
          console.error("Error deleting item:", error);
        });
    }
  };

  const sortItems = (key) => {
    setSortKey(key);
    setItems([
      ...items.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      }),
    ]);
  };

  useEffect(() => {
    // Fetch inventory data from the database when the component mounts
    axios
      .get("http://localhost:5000/inventory")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching inventory data:", error);
      });
  }, []);

  useEffect(() => {
    const dropdownButton = document.getElementById("dropdownDefault");
    const dropdown = document.getElementById("dropdown");

    const handleDropdownToggle = () => {
      dropdown.classList.toggle("hidden");
    };

    dropdownButton.addEventListener("click", handleDropdownToggle);

    return () => {
      dropdownButton.removeEventListener("click", handleDropdownToggle);
    };
  }, []);

  return (
    <div className="bg-white shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)] rounded-2xl pb-8 px-8 mb-10">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-light-blue">Inventory</h1>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={newItem.name}
            onChange={handleChange}
            placeholder="Name"
            className="border px-2 py-1 mr-2 rounded-xl"
          />
          <input
            type="date"
            name="dateAdded"
            value={newItem.dateAdded}
            onChange={handleChange}
            placeholder="Date Added"
            className="border px-2 py-1 mr-2 rounded-xl"
          />
          <input
            type="number"
            name="quantity"
            value={newItem.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="border px-2 py-1 mr-2 rounded-xl"
          />
          <input
            type="text"
            name="productGroup"
            value={newItem.productGroup}
            onChange={handleChange}
            placeholder="Product Group"
            className="border px-2 py-1 mr-2 rounded-xl"
          />
          <button
            onClick={addItem}
            className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-xl"
          >
            Add Product
          </button>
        </div>
        <div className="mb-4 relative">
          <button
            className="bg-gray-500 hover:bg-gray-400 text-white px-4 py-2 rounded-xl flex items-center"
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
          >
            Sort By
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          <div
            id="dropdown"
            className="hidden absolute bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-2"
          >
            <ul className="py-1" aria-labelledby="dropdownDefault">
              <li>
                <button
                  onClick={() => sortItems("name")}
                  className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 w-full text-left"
                >
                  Sort by Name
                </button>
              </li>
              <li>
                <button
                  onClick={() => sortItems("dateAdded")}
                  className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 w-full text-left"
                >
                  Sort by Date Added
                </button>
              </li>
              <li>
                <button
                  onClick={() => sortItems("productGroup")}
                  className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 w-full text-left"
                >
                  Sort by Product Group
                </button>
              </li>
            </ul>
          </div>
        </div>
        <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-lg">
          <thead className="bg-white">
            <tr>
              <th className="px-4 py-2 border text-center">Name</th>
              <th className="px-4 py-2 border text-center">ID</th>
              <th className="px-4 py-2 border text-center">Date Added</th>
              <th className="px-4 py-2 border text-center">Quantity</th>
              <th className="px-4 py-2 border text-center">Product Group</th>
              <th className="px-4 py-2 border text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <InventoryItem key={item._id} item={item} onDelete={deleteItem} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
