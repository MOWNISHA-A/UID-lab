import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Fresh Apples',
    price: 120,
    image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&w=400',
    description: 'Crisp, juicy apples freshly picked from local farms. Perfect for snacking and baking.'
  },
  {
    id: 2,
    name: 'Organic Tomatoes',
    price: 80,
    image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    description: 'Ripe, organic tomatoes full of flavor. Great for salads, sauces, and sandwiches.'
  },
  {
    id: 3,
    name: 'Green Spinach',
    price: 60,
    image: 'https://tse3.mm.bing.net/th/id/OIP.MIhh6wGi3kXh6m0sAzOhhAHaIl?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    description: 'Fresh green spinach leaves packed with nutrients. Ideal for smoothies and cooking.'
  },
  {
    id: 4,
    name: 'Bananas',
    price: 50,
    image: 'https://images.pexels.com/photos/461208/pexels-photo-461208.jpeg?auto=compress&w=400',
    description: 'Sweet bananas, perfect for breakfast and snacks.'
  },
  {
    id: 5,
    name: 'Carrots',
    price: 40,
    image: 'https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg?auto=compress&w=400',
    description: 'Crunchy carrots, great for salads and cooking.'
  },
];

function Products() {
  return (
    <div className="products-page" style={{ padding: '0', minHeight: '100vh', background: 'linear-gradient(120deg, #eaf0f6 0%, #f8f9fa 100%)' }}>
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
        <h1 style={{ fontSize: '2.2em', margin: '0', fontWeight: '700', letterSpacing: '1px' }}>
          FreshGrocer
        </h1>
        <nav style={{ marginTop: '18px' }}>
          <Link to="/" style={{ margin: '0 20px', fontSize: '1em', color: '#fff', fontWeight: '500', textDecoration: 'none' }}>Home</Link>
          <Link to="/products" style={{ margin: '0 20px', fontSize: '1em', color: '#fff', fontWeight: '500', textDecoration: 'none' }}>Products</Link>
          <Link to="/about" style={{ margin: '0 20px', fontSize: '1em', color: '#fff', fontWeight: '500', textDecoration: 'none' }}>About</Link>
          <Link to="/contact" style={{ margin: '0 20px', fontSize: '1em', color: '#fff', fontWeight: '500', textDecoration: 'none' }}>Contact</Link>
        </nav>
      </header>

      <h2 style={{ fontSize: '1.5em', marginBottom: '32px', textAlign: 'center', color: '#2563eb', letterSpacing: '2px', fontWeight: 'bold' }}>
        Grocery Products
      </h2>
      <div
        className="products-list"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(2, auto)',
          gap: '60px',
          justifyItems: 'center',
          alignItems: 'stretch',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          boxSizing: 'border-box',
        }}
      >
        {products.map(product => (
          <div
            key={product.id}
            className="product-card"
            style={{
              border: 'none',
              borderRadius: '18px',
              padding: '24px',
              width: '320px',
              textAlign: 'center',
              background: 'linear-gradient(120deg, #fff 60%, #eaf0f6 100%)',
              boxShadow: '0 4px 16px #4f8cff22',
              transition: 'transform 0.2s, box-shadow 0.2s',
              fontSize: '1em',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.06)';
              e.currentTarget.style.boxShadow = '0 12px 48px #2563eb44';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 6px 32px #4f8cff33';
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '180px',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '16px',
                marginBottom: '18px',
                boxShadow: '0 4px 16px #2563eb22',
              }}
            />
            <h3 style={{ fontSize: '1.1em', margin: '18px 0', color: '#1a237e', fontWeight: 'bold' }}>{product.name}</h3>
            <p style={{ fontSize: '1em', fontWeight: 'bold', color: '#2563eb' }}>₹{product.price}</p>
            <p style={{ fontSize: '0.95em', color: '#333', marginBottom: '18px' }}>
              {product.description}
            </p>
            <div>
              <Link
                to={`/product/${product.id}`}
                className="main-btn"
                style={{
                  padding: '10px 18px',
                  fontSize: '0.95em',
                  background: '#4f8cff',
                  color: '#fff',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  marginRight: '8px',
                  boxShadow: '0 2px 8px #4f8cff22',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                View Details
              </Link>
              <Link
                to="/cart"
                className="main-btn"
                style={{
                  padding: '10px 18px',
                  fontSize: '0.95em',
                  background: '#2563eb',
                  color: '#fff',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  boxShadow: '0 2px 8px #2563eb22',
                  fontWeight: 'bold',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Add to Cart
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* ===== FOOTER ===== */}
      <footer style={{ background: '#2c3e50', color: '#fff', padding: '30px 16px', marginTop: '40px', textAlign: 'center' }}>
        <p style={{ fontSize: '1em', marginBottom: '12px' }}>© 2025 FreshGrocer. All Rights Reserved.</p>
        <p style={{ fontSize: '0.95em', marginBottom: '12px' }}>📍 Bangalore, India | 📧 support@freshgrocer.com | 📞 +91-9876543210</p>
        <div style={{ marginTop: '15px' }}>
          <a href="https://facebook.com" style={{ margin: '0 15px', fontSize: '1em', color: '#fff', textDecoration: 'none' }}>Facebook</a>
          <a href="https://instagram.com" style={{ margin: '0 15px', fontSize: '1em', color: '#fff', textDecoration: 'none' }}>Instagram</a>
          <a href="https://twitter.com" style={{ margin: '0 15px', fontSize: '1em', color: '#fff', textDecoration: 'none' }}>Twitter</a>
        </div>
      </footer>
    </div>
  );
}

export default Products;
