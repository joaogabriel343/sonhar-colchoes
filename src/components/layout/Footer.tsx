import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sonhar-black-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Sonhar</h3>
            <p className="text-gray-300 max-w-xs">
              Proporcionando o melhor descanso e conforto para sua casa há mais de 15 anos.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.instagram.com/sonharcolchoesvga/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-sonhar-black-700 hover:bg-sonhar-red-600 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold mb-4">Tópicos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-sonhar-red-400 transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-sonhar-red-500 rounded-full inline-block mr-2"></span>
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link to="/historia" className="text-gray-300 hover:text-sonhar-red-400 transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-sonhar-red-500 rounded-full inline-block mr-2"></span>
                  Nossa História
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-300 hover:text-sonhar-red-400 transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-sonhar-red-500 rounded-full inline-block mr-2"></span>
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="text-gray-300 hover:text-sonhar-red-400 transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-sonhar-red-500 rounded-full inline-block mr-2"></span>
                  Nossa Equipe
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-sonhar-red-400 transition-colors duration-200 flex items-center">
                  <span className="w-1.5 h-1.5 bg-sonhar-red-500 rounded-full inline-block mr-2"></span>
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="text-sonhar-red-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">R. Humberto Pizo, 999 <br />Jardim Petropolis, Varginha - MG<br />CEP: 37026-280</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-sonhar-red-400 mr-3 flex-shrink-0" />
                <p className="text-gray-300">(35) 99975-9936</p>
              </div>
              <div className="flex items-start">
                <Clock size={18} className="text-sonhar-red-400 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">
                  Segunda a Sexta: 10h às 22h<br />
                  Sábado: 10h às 22h<br />
                  Domingo: 13h às 19h
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Sonhar Colchões e Estofados. Todos os direitos reservados. <br />
            <span className="text-gray-500 text-xs">&lt;C&gt; Calmdev</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
