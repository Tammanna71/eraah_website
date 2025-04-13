// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './theme';
import LandingPage from './components/LandingPage/LandingPage';
import AboutPage from './components/AboutPage/AboutPage';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';

function App() {
  // const location = useLocation();
  // console.log('Current Path:', location.pathname);

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add more routes here */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;