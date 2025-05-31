import './App.css'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useRef } from 'react';

gsap.registerPlugin(useGSAP);

const homeCarousel = [
  'src/assets/homeCarousel/0.jpg',
  'src/assets/homeCarousel/1.jpg',
  'src/assets/homeCarousel/2.jpg',
  'src/assets/homeCarousel/3.jpg',
]

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const overlayRef = useRef(null);
  const imageRef = useRef(null);

  const transition = (newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Fondu au noir
    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.5,
      onComplete: () => {
        // Changer l'image pendant que l'écran est noir
        setCurrentImageIndex(newIndex);
        
        // Fondu depuis le noir
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.5,
          delay: 0.2,
          onComplete: () => {
            setIsTransitioning(false);
          }
        });
      }
    });
  };

  const goForward = () => {
    const newIndex = (currentImageIndex + 1) % homeCarousel.length;
    transition(newIndex);
  };

  const goBackward = () => {
    const newIndex = currentImageIndex === 0 ? homeCarousel.length - 1 : currentImageIndex - 1;
    transition(newIndex);
  };

  // Configuration de GSAP
  useGSAP(() => {
    gsap.set(overlayRef.current, { opacity: 0 });
  }, []);

  return (
    <>
      <div className="App bg-base-100 min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-10 py-10 md:py-0 gap-12 md:gap-20 lg:gap-40" style={{fontFamily: 'EB Garamond, serif'}}>
        {/* Texte à gauche (devient en bas sur mobile) */}
        <div className="w-full md:w-1/2 lg:w-2/5 text-right">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight inline-block">
            <div className="flex flex-wrap justify-end gap-x-2">
              {/* Groupe 1 : "Plus" → "Une" */}
              <span className="relative group">
                <span className="transition-all duration-400 ease-in-out group-hover:opacity-0 group-hover:-translate-x-2 inline-block">
                  Plus&nbsp;
                </span>
                <span className="hidden absolute inset-0 group-hover:inline-block transition-all duration-400 ease-in-out opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-fuchsia-400" style={{fontFamily: 'Playfair Display, serif', fontWeight: 700}}>
                  Une&nbsp;
                </span>
              </span>

              {/* Groupe 2 : "qu'une simple" → "Nouvelle" */}
              <span className="relative group">
                <span className="transition-all duration-400 ease-in-out group-hover:opacity-0 group-hover:-translate-x-2 inline-block">
                  qu&apos;une simple&nbsp;
                </span>
                <span className="hidden absolute inset-0 group-hover:inline-block transition-all duration-400 ease-in-out opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-sky-400" style={{fontFamily: 'Playfair Display, serif', fontWeight: 700}}>
                  Nouvelle&nbsp;
                </span>
              </span>

              {/* Groupe 3 : "vue sur le Monde." → "Dimension" */}
              <span className="relative group">
                <span className="transition-all duration-400 ease-in-out group-hover:opacity-0 group-hover:-translate-x-2 inline-block">
                  vue sur le Monde.
                </span>
                <span className="hidden absolute inset-0 group-hover:inline-block transition-all duration-400 ease-in-out opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-emerald-300" style={{fontFamily: 'Playfair Display, serif', fontWeight: 700}}>
                  Dimension
                </span>
              </span>
            </div>
          </h1>
        </div>
        {/* Image Carousel à droite (devient en haut sur mobile) */}
        <div className="carousel mt-20 w-full md:w-[450px] lg:w-[560px] h-[350px] md:h-[500px] lg:h-[700px] relative overflow-hidden rounded-2xl shadow-xl">
          {/* Image actuelle */}
          <div 
            ref={imageRef}
            className="carousel-item w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${homeCarousel[currentImageIndex]})` }}
          ></div>
          
          {/* Overlay pour le fondu au noir */}
          <div 
            ref={overlayRef}
            className="absolute inset-0 bg-black pointer-events-none"
            style={{ opacity: 0 }}
          ></div>
          
          {/* Navigation Dots */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 z-10">
            {homeCarousel.map((_, index) => (
              <button 
                key={index} 
                onClick={() => !isTransitioning && transition(index)}
                className={`w-2 md:w-3 h-2 md:h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                disabled={isTransitioning}
              ></button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-5 right-5 flex space-x-3 z-10">
            <button 
              className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center border-2 rounded-full text-white transition-all group"
              onClick={goBackward}
              disabled={isTransitioning}
            >
                <img
                src="src/assets/leftBrack.svg"
                alt="Previous"
                width={10}
                height={10}
                className="transform group-hover:scale-125 group-hover:-translate-x-1 transition-transform duration-300"
                />
            </button>
            
            <button 
              className="w-8 md:w-10 h-8 md:h-10 flex items-center justify-center border-2 rounded-full text-white transition-all group"
              onClick={goForward}
              disabled={isTransitioning}
            >
                <img
                src="src/assets/rightBrack.svg"
                alt="Previous"
                width={10}
                height={10}
                className="transform group-hover:scale-125 group-hover:-translate-x-1 transition-transform duration-300"
                />
            </button>
          </div>
        </div>

        {/* Swipe up */}

        <a className="flex flex-col absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-sm items-center hover:animate-bounce" href="#pictures">
        Swipe to discover
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v8.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
          </a>
      </div>
    </>
  )
}

export default App