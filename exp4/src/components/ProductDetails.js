import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductDetails.css';

const products = [
  {
    id: 1,
    name: 'Fresh Apples',
    price: 120,
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=400&q=80',
    description: 'Crisp, juicy apples freshly picked from local farms. Perfect for snacking and baking.'
  },
  {
    id: 2,
    name: 'Organic Tomatoes',
    price: 80,
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80',
    description: 'Ripe, organic tomatoes full of flavor. Great for salads, sauces, and sandwiches.'
  },
  {
    id: 3,
    name: 'Green Spinach',
    price: 60,
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b6c3c50?auto=format&fit=crop&w=400&q=80',
    description: 'Fresh green spinach leaves packed with nutrients. Ideal for smoothies and cooking.'
  },
];

function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <div className="product-details"><h2>Product not found</h2></div>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-img-large" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="price">Price: ₹{product.price}</p>
      <Link to="/products" className="main-btn">Back to Products</Link>
    </div>
  );
}

export default ProductDetails;
