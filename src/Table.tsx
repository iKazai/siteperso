import './Table.css';
import { useState, useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Images pour chaque section (une seule image par section)
const sectionImages = {
    projects: 'src/assets/tableImages/projects1.jpg',
    pictures: 'src/assets/tableImages/pictures1.jpg',
    about: 'src/assets/tableImages/about1.jpg'
};

export default function TableOfContents() {
    const [shift, setShifted] = useState(false);
    const [currentSection, setCurrentSection] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const ulRef = useRef<HTMLUListElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    
    function shiftTableOfContents(section: string) {
        // Vérifier si on est sur desktop
        const isDesktop = window.innerWidth >= 1024;
        if (!isDesktop) {
            // For mobile, just change the section without animation
            setCurrentSection(section);
            return;
        }
        
        setShifted(true);
        setCurrentSection(section);

        // Déplace le contenu vers la droite pour faire de la place pour l'image
        gsap.to(containerRef.current, {
            x: "-30vw", // Déplacement de 500px vers la gauche sur desktop seulement
            duration: 0.8,
            ease: "power1.inOut"
        });

        // Afficher l'image correspondante à la section
        if (section && imageContainerRef.current) {
            imageContainerRef.current.style.backgroundImage = `url(${sectionImages[section as keyof typeof sectionImages]})`;
            imageContainerRef.current.style.display = 'block';
            
            gsap.fromTo(imageContainerRef.current,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.8, ease: "power1.inOut" }
            );
        }
    }
      
    function resetTableOfContents() {
        setShifted(false);
        setCurrentSection(null);

        // Animation GSAP pour remettre tout le contenu au centre
        gsap.to(containerRef.current, {
            x: 0, // Retour à la position d'origine
            duration: 0.8,
            ease: "power1.inOut"
        });

        // Cacher l'image
        if (imageContainerRef.current) {
            gsap.to(imageContainerRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 0.4,
                ease: "power1.inOut",
                onComplete: () => {
                    if (imageContainerRef.current) {
                        imageContainerRef.current.style.display = 'none';
                    }
                }
            });
        }
    }    
    
    function showPreview(section: string) {
        if (!shift) {
            shiftTableOfContents(section);
        } else if (currentSection !== section) {
            // Si on change de section pendant que c'est déjà shifté
            setCurrentSection(section);
            
            // Changement direct de l'image sans transition
            if (imageContainerRef.current) {
                imageContainerRef.current.style.backgroundImage = `url(${sectionImages[section as keyof typeof sectionImages]})`;
            }
        }

    }
    
    return (
        <>
            <div
                ref={containerRef}
                id="tableofcontents"
                className="TableOfContents bg-base-100 h-screen flex flex-col justify-center items-center p-6 overflow-hidden"
                style={{ fontFamily: 'EB Garamond, serif' }}
                onMouseLeave={resetTableOfContents}
            >
                {/* Conteneur d'image fixe pour chaque section */}
                <div 
                    ref={imageContainerRef}
                    className="fixed right-0 top-1/4 h-[70vh] lg:w-1/4 bg-cover bg-center image-container rounded-2xl shadow-xl"
                    style={{ display: 'none' }}
                >
                </div>

                <h2 className="relative text-6xl font-bold mb-8 pb-4">
                    Table of Contents
                    <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-90 border-b-3 border-white shadow-md"></span>
                </h2>
                <ul ref={ulRef} className="text-5xl space-y-10 font-semibold text-center">
                    <li>
                        <a
                            href="#projects"
                            className="hover:text-[#b5dcff] transition-all duration-300 inline-block hover:scale-130"
                            onMouseOver={() => showPreview("projects")}
                        >
                            1. Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#pictures"
                            className="hover:text-[#b5dcff] transition-all duration-300 inline-block hover:scale-130"
                            onMouseOver={() => showPreview("pictures")}
                        >
                            2. Pictures
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="hover:text-[#b5dcff] transition-all inline-block duration-300 hover:scale-130"
                            onMouseOver={() => showPreview("about")}
                        >
                            3. About
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}