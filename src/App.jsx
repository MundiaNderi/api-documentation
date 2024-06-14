// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Navbar from './Components/Navbar/Navbar';
import UnsplashDocs from './Components/UnsplashDocs/UnsplashDocs'
import RickMorty from './Components/RickMorty/RickMorty'
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/unsplash" element={<UnsplashDocs />} />
        <Route path="/rickandmorty" element={<RickMorty />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
