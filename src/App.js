import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home'; // Adjust the path as needed
import AboutUs from './components/aboutus'; // Adjust the path as needed
import Hotels from './components/hotels'; // Adjust the path as needed 
import Gallery from './components/gallery'; 
import News from './components/news';
import Contact from './components/contact';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route renders Home.js */}
        <Route path="/" element={<Home />} />
        {/* About Us page */}
        <Route path="/about-us" element={<AboutUs />} />
        {/* Hotels page */}
        <Route path="/hotels" element={<Hotels />} />
        {/* Gallery route */}
        <Route path="/gallery" element={<Gallery />} />
        {/* News Route*/}
        <Route path="/news" element={<News />} />
        {/* Contact route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
