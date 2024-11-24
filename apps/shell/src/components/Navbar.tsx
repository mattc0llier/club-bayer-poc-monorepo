import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<string | null>(null);

  const handleMenuOpen = (menu: string) => {
    setMenu(menu);
  };

  const handleMenuClose = () => {
    setMenu(null);
  };

  return (
    <nav style={{ backgroundColor: '#E0F7FA', padding: '10px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="https://www.bayer.com/themes/custom/bayer_cpa/logo.svg" alt="Bayer Logo" style={{ marginRight: '10px', height: 40, width: 40 }} />
        <h1 style={{ flex: 1 }}>Club Bayer</h1>
        <ul style={{ listStyleType: 'none', display: 'flex', padding: 0 }}>
          <li style={{ marginRight: '20px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link to="/remote1">Login</Link>
          </li>
          <li style={{ marginRight: '20px' }}>
            <Link to="/remote2">News</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
