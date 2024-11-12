import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import the Navbar component
import NxWelcome from './nx-welcome';

const Remote2 = React.lazy(() => import('remote2/Module'));
const Remote1 = React.lazy(() => import('remote1/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div>
        <Navbar /> {/* Include Navbar at the top */}
        <Routes>
          <Route path="/" element={<NxWelcome title="shell" />} />
          
          <Route path="/remote2" element={<Remote2 />} />
          <Route path="/remote1" element={<Remote1 />} />
        </Routes>
      </div>
    </React.Suspense>
  );
}

export default App;
