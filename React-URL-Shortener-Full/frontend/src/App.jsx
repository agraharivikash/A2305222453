import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shortener from './pages/Shortener';
import Statistics from './pages/Statistics';
import RedirectHandler from './routes/RedirectHandler';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Shortener />} />
      <Route path="/stats" element={<Statistics />} />
      <Route path="/:shortcode" element={<RedirectHandler />} />
    </Routes>
  );
}

export default App;