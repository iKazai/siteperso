import './styles/Navigation.css';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>      <div className="Navigation bg-base-100 h-24 flex flex-row justify-between items-center p-6 fixed top-0 left-0 right-0 z-10">
        <h2 className="text-5xl font-bold">
          <span className="relative inline-block group cursor-pointer">
            <span className="group-hover:opacity-0 transition-opacity duration-300">
              Delma
            </span>
            <span className="absolute top-0 left-0 min-w-max opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              StaDELMAnn
            </span>
          </span>
        </h2>

        <button 
          className="btn btn-ghost text-2xl relative group overflow-hidden transition-all duration-300 hover:bg-transparent"
          onClick={toggleMenu}
        >
          <span className="relative z-10 group-hover:text-[#b5dcff] transition-colors duration-300">Menu</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b5dcff] group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </button>
      </div>
      
      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
          {/* Bouton de fermeture */}
          <button 
            className="absolute top-8 right-8 text-white text-4xl hover:text-[#b5dcff] transition-colors duration-300 z-60 animate-fade-in-delayed cursor-pointer"
            onClick={toggleMenu}
          >
            ✕
          </button>

          {/* Menu principal */}
          <div className="text-center animate-slide-up">
            <nav className="flex flex-col space-y-8">
              <a 
                href="/" 
                className="text-6xl text-white font-serif hover:text-[#b5dcff] transition-all duration-300 hover:scale-110 cursor-pointer"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a 
                href="#pictures" 
                className="text-6xl text-white font-serif  hover:text-[#b5dcff] transition-all duration-300 hover:scale-110 cursor-pointer"
                onClick={toggleMenu}
              >
                Pictures
              </a>
              <a 
                href="#projects" 
                className="text-6xl text-white font-serif  hover:text-[#b5dcff] transition-all duration-300 hover:scale-110 cursor-pointer"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a 
                href="#about" 
                className="text-6xl text-white font-serif  hover:text-[#b5dcff] transition-all duration-300 hover:scale-110 cursor-pointer"
                onClick={toggleMenu}
              >
                About me
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}