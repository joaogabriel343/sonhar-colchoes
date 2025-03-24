
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
    };
  
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'História', path: '/historia' },
    { name: 'Produtos', path: '/produtos' },
    { name: 'Equipe', path: '/equipe' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <NavLink 
          to="/" 
          className="flex items-center"
        >
          <span className={`text-2xl font-bold transition-colors duration-300 ${
            isScrolled ? 'text-sonhar-red-700' : 'text-white text-shadow'
          }`}>
            Sonhar
          </span>
          <span className={`ml-2 text-lg font-medium transition-colors duration-300 ${
            isScrolled ? 'text-sonhar-black-700' : 'text-white/90 text-shadow'
          }`}>
            Colchões & Estofados
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `
                    relative font-medium transition-colors duration-300
                    hover:text-sonhar-red-600
                    ${isScrolled 
                      ? (isActive ? 'text-sonhar-red-600' : 'text-sonhar-black-700') 
                      : (isActive ? 'text-white' : 'text-white/80')}
                    after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                    after:h-0.5 after:bg-sonhar-red-600 after:transition-all after:duration-300
                    ${isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                  `}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-sonhar-red-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? 
            <X size={24} className="text-sonhar-red-600" /> : 
            <Menu size={24} className={isScrolled ? "text-sonhar-black-700" : "text-white"} />
          }
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[400px] border-b border-gray-200' : 'max-h-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `
                    block py-2 px-4 font-medium rounded-md transition-colors duration-200
                    ${isActive 
                      ? 'text-white bg-sonhar-red-600' 
                      : 'text-sonhar-black-600 hover:bg-sonhar-red-100 hover:text-sonhar-red-600'
                    }
                  `}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
