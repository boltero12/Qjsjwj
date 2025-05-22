import React, { useState, useEffect } from 'react';
import { Menu, X, CreditCard } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <CreditCard className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Crediar
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
              Inicio
            </a>
            <a href="#calculator" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
              Calculadora
            </a>
            <a href="#requirements" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
              Requisitos
            </a>
            <a href="#about" className="text-gray-900 hover:text-blue-600 font-medium transition-colors">
              Sobre Nosotros
            </a>
            <a 
              href="https://crediar.webcindario.com/index.html" 
              className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar Ahora
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-900" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100 shadow-lg' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          <a 
            href="#home" 
            className="text-gray-900 hover:text-blue-600 font-medium py-2 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Inicio
          </a>
          <a 
            href="#calculator" 
            className="text-gray-900 hover:text-blue-600 font-medium py-2 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Calculadora
          </a>
          <a 
            href="#requirements" 
            className="text-gray-900 hover:text-blue-600 font-medium py-2 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Requisitos
          </a>
          <a 
            href="#about" 
            className="text-gray-900 hover:text-blue-600 font-medium py-2 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sobre Nosotros
          </a>
          <a 
            href="https://crediar.webcindario.com/index.html" 
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-center"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            Solicitar Ahora
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;