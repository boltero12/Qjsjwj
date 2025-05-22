import React from 'react';
import { CreditCard, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and company info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <CreditCard className="h-7 w-7 text-blue-500 mr-2" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Crediar
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Soluciones financieras para tus proyectos y necesidades. Préstamos personales simples y rápidos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#calculator" className="text-gray-400 hover:text-white transition-colors">Calculadora</a>
              </li>
              <li>
                <a href="#requirements" className="text-gray-400 hover:text-white transition-colors">Requisitos</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a>
              </li>
              <li>
                <a 
                  href="https://crediar.webcindario.com/index.html" 
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Préstamo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span className="text-gray-400">info@crediar.com.ar</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span className="text-gray-400">+54 11 2345-6789</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <span className="text-gray-400">Av. Corrientes 1234, CABA, Argentina</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Suscríbete para recibir noticias y ofertas especiales.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Crediar. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;