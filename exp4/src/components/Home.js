import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* ===== HEADER ===== */}
      <header 
        style={{ 
          background: 'linear-gradient(90deg, #4f8cff, #3b6bdc)', 
          padding: '25px 0', 
          marginBottom: '40px', 
          color: '#fff', 
          textAlign: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)' 
        }}
      >
        <h1 style={{ fontSize: '3.5em', margin: '0', fontWeight: '700', letterSpacing: '1px' }}>
          FreshGrocer
        </h1>
        <nav style={{ marginTop: '18px' }}>
          <Link to="/" style={{ margin: '0 20px', fontSize: '1.5em', color: '#fff', fontWeight: '500', textDecoration: 'none' }}>Home</Link>
          <Link to="/products" style={{ margin: '0 20px', fontSize: '1.5em', color: '#fff', fontWeight: '500', textDecoration: 'none' }}>Products</Link>
          <Link to="/about" style={{ margin: '0 20px', fontSize: '1.5em', color: '#fff', fontWeight: '500', textDecoration: 'none' }}>About</Link>
          <Link to="/contact" style={{ margin: '0 20px', fontSize: '1.5em', color: '#fff', fontWeight: '500', textDecoration: 'none' }}>Contact</Link>
        </nav>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '2.5em', marginBottom: '18px', color: '#2c3e50', fontWeight: '600' }}>
          Welcome to <span style={{ color: '#4f8cff' }}>FreshGrocer</span>
        </h2>
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80" 
          alt="Grocery" 
          style={{ 
            borderRadius: '15px', 
            marginBottom: '24px', 
            maxWidth: '400px', 
            width: '100%', 
            height: 'auto', 
            boxShadow: '0 6px 16px rgba(0,0,0,0.2)' 
          }} 
        />
        <p style={{ fontSize: '1.6em', maxWidth: '800px', margin: 'auto', color: '#444' }}>
          Your one-stop shop for <strong>fresh groceries</strong> delivered to your doorstep.
        </p>
        <ul style={{ fontSize: '1.25em', marginTop: '25px', textAlign: 'left', maxWidth: '650px', margin: 'auto', color: '#333' }}>
          <li>🌱 Wide variety of fruits, vegetables, and groceries</li>
          <li>⚡ Fast and reliable delivery</li>
          <li>💳 Easy online ordering and secure payment</li>
          <li>🎁 Special discounts for members</li>
        </ul>
      </section>

      {/* ===== LOCATION SECTION ===== */}
      <section style={{ marginBottom: '50px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.3em', marginBottom: '16px', color: '#2c3e50' }}>Our Location</h2>
        <iframe
          title="Store Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=77.5946%2C12.9716%2C77.5946%2C12.9716&amp;layer=mapnik"
          style={{ width: '90%', height: '350px', border: '3px solid #4f8cff', borderRadius: '12px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        <p style={{ fontSize: '1.25em', marginTop: '15px', color: '#555' }}>
          Visit our store in <strong>Bangalore, India</strong> or order online for home delivery!
        </p>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section style={{ background: '#fff', borderRadius: '14px', padding: '50px', boxShadow: '0 3px 14px rgba(0,0,0,0.1)', marginBottom: '50px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.3em', marginBottom: '20px', color: '#2c3e50', fontWeight: '600' }}>Why Choose Us?</h2>
        <ul style={{ fontSize: '1.25em', textAlign: 'left', maxWidth: '650px', margin: 'auto', color: '#333' }}>
          <li>✅ 100% satisfaction guarantee</li>
          <li>📞 24/7 customer support</li>
          <li>💰 Exclusive deals and offers</li>
          <li>🌍 Eco-friendly packaging</li>
        </ul>
      </section>

      {/* ===== SHOP NOW BUTTON ===== */}
      <Link 
        to="/products" 
        style={{ 
          display: 'inline-block', 
          padding: '16px 40px', 
          fontSize: '1.5em', 
          borderRadius: '10px', 
          background: '#4f8cff', 
          color: '#fff', 
          textDecoration: 'none', 
          fontWeight: '700',
          marginBottom: '60px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: '0.3s'
        }}
      >
        🛒 Shop Now
      </Link>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: '#2c3e50', color: '#fff', padding: '40px 20px', marginTop: '40px', textAlign: 'center' }}>
        <p style={{ fontSize: '1.3em', marginBottom: '12px' }}>© 2025 FreshGrocer. All Rights Reserved.</p>
        <p style={{ fontSize: '1.2em', marginBottom: '12px' }}>📍 Bangalore, India | 📧 support@freshgrocer.com | 📞 +91-9876543210</p>
        <div style={{ marginTop: '15px' }}>
          <a href="https://facebook.com" style={{ margin: '0 15px', fontSize: '1.4em', color: '#fff', textDecoration: 'none' }}>Facebook</a>
          <a href="https://instagram.com" style={{ margin: '0 15px', fontSize: '1.4em', color: '#fff', textDecoration: 'none' }}>Instagram</a>
          <a href="https://twitter.com" style={{ margin: '0 15px', fontSize: '1.4em', color: '#fff', textDecoration: 'none' }}>Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
