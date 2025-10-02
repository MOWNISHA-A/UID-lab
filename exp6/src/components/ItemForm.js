import React, { useState } from "react";
import "./ItemForm.css"; // custom CSS for styling

function ItemForm() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    quantity: ""
  });

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.quantity) {
      alert("Please enter name and quantity");
      return;
    }
    setItems([...items, { ...formData, id: Date.now() }]); // add unique id
    setFormData({ name: "", description: "", quantity: "" });
  };

  // handle delete item
  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h2 className="title">📋 Add New Item</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Item Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter item name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            name="description"
            placeholder="Enter description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            placeholder="Enter quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn">➕ Add Item</button>
      </form>

      <h3 className="subtitle">📝 Item List</h3>
      <ul className="item-list">
        {items.length === 0 ? (
          <p className="empty">No items added yet.</p>
        ) : (
          items.map((item) => (
            <li key={item.id} className="item-card">
              <div className="item-details">
                <h4>
                  {item.name} <span className="qty">(x{item.quantity})</span>
                </h4>
                <p>{item.description || "No description"}</p>
              </div>
              <button
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                ❌
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ItemForm;
