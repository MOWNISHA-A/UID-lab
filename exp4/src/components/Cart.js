import React from 'react';
import './Products.css';

function Cart() {
  // Dummy cart items for demo
  const cartItems = [
    { id: 1, name: 'Fresh Apples', price: 120 },
    { id: 2, name: 'Organic Tomatoes', price: 80 }
  ];

  return (
    <div className="cart-section" style={{ fontSize: '1.5em', marginTop: '48px' }}>
      <h2 style={{ fontSize: '2em' }}>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>
      )}
      <button className="main-btn" style={{ marginTop: '24px' }}>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;
