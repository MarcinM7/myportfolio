import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './views/HomeView';
import About from './views/AboutView';
import Contact from './views/ContactView';
import Project from './views/Project';
import Footer from './views/Footer';
import Header from './views/Header';
import JS from './views/JSProject';
import Vu from './views/VueView';
import Rc from './views/ReactView';
import Animation3D from './views/Animation3D';
import './index.css';

function App() {
  // Funkcja do zamykania menu przy kliknięciu poza menu na urządzeniach mobilnych
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navigation = document.querySelector('.navigation.mobile');
      const hamburger = document.querySelector('.hamburger-menu');
      
      if (navigation && navigation.classList.contains('open') && 
          !navigation.contains(event.target) && 
          hamburger && !hamburger.contains(event.target)) {
        
        navigation.classList.remove('open');
        if (hamburger) hamburger.classList.remove('open');
        document.body.classList.remove('menu-open');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="app-container">
      <Header />
      
      <div className="animation-wrapper">
        <Animation3D />
      </div>
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project/>} />
          <Route path="/js-projects" element={<JS />} />
          <Route path="/VueView" element={<Vu />} />
          <Route path="/ReactView" element={<Rc />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;