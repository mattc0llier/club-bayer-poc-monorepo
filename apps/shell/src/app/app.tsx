import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import the Navbar component
import NxWelcome from './nx-welcome';
import './app.module.css';

const Remote2 = React.lazy(() => import('remote2/Module'));
const Remote1 = React.lazy(() => import('remote1/Module'));

export function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div>
        <Navbar /> {/* Include Navbar at the top */}
        <div style={{ display: 'flex', height: '100vh' }}>
          {/* Left half: Remote1 embedded */}
          <div style={{ flex: 1 }}>
          <Routes>
              <Route path="/" element={<NxWelcome title="shell" />} />
              <Route path="/remote1" element={<Remote1 />} />
              <Route path="/remote2" element={<Remote2 />} />              
            </Routes>          
          </div>
          
        </div>
      </div>
    </React.Suspense>
  );
}

export default App;
