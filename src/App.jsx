// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import UnsplashDocs from './Components/UnsplashDocs/UnsplashDocs'
import RickMoty from './Components/RickMorty/RickMorty'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/unsplash" element={<UnsplashDocs />} />
        <Route path="/rickandmorty" element={<RickMoty />} />
      </Routes>
    </Router>
  );
};

export default App;
