import { Routes, Route } from 'react-router-dom';
import Home from './views/HomeView';
import About from './views/AboutView';
import Contact from './views/ContactView';
import Project from './views/Project';
import Footer from './views/Footer';
import Header from './views/Header';
import JS from './views/JSProject';
import Animation3D from './views/Animation3D';
import './index.css';

function App() {
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
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;