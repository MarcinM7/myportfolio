import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css'; // Zakładam, że masz plik CSS dla tego komponentu

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Obsługa zmiany rozmiaru ekranu
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Zamykanie menu po kliknięciu w link
  const handleLinkClick = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  // Przełączanie menu mobilnego
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">Marcin Muszyński</Link>
        </div>

        {/* Przycisk menu hamburger dla urządzeń mobilnych */}
        {isMobile && (
          <button 
            className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}

        {/* Nawigacja - desktop jako poziomy pasek, mobile jako rozwijane menu */}
        <nav className={`navigation ${isMobile ? 'mobile' : 'desktop'} ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={handleLinkClick}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={handleLinkClick}>O mnie</Link>
            </li>
            <li>
              <Link to="/project" onClick={handleLinkClick}>Projekty</Link>
            </li>
            
            
            <li>
              <Link to="/contact" onClick={handleLinkClick}>Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;