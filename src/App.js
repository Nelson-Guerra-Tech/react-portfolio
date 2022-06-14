import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';

// importing components
import Header from './components/Header';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';

// importing css
import './index.css';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  // initializing AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
