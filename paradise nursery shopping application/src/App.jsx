import React, { useState } from 'react';
import ProductList from './pages/ProductList';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleStartClicked = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        <div className="background-image" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div className="landing-content" style={{ textAlign: 'center', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: '40px', borderRadius: '10px' }}>
            <h1>Welcome to Paradise Nursery</h1>
            <p>Where your green dreams come true</p>
            <button className="get-started-btn" onClick={handleStartClicked} style={{ padding: '12px 24px', fontSize: '18px', cursor: 'pointer' }}>
              Get Started
            </button>
          </div>
          <AboutUs />
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
