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
        const isDesktop = window.innerWidth >= 1024;
        if (!isDesktop) {
            setCurrentSection(section);
            return;
        }

        setShifted(true);
        setCurrentSection(section);

        gsap.to(containerRef.current, {
            x: "-30vw",
            duration: 0.8,
            ease: "power1.inOut"
        });

        if (imageContainerRef.current) {
            const el = imageContainerRef.current;
            el.style.backgroundImage = `url(${sectionImages[section as keyof typeof sectionImages]})`;
            el.style.display = 'block';

            gsap.fromTo(el,
                { opacity: 0, scale: 0.95 },
                { opacity: 1, scale: 1, duration: 0.8, ease: "power1.inOut" }
            );
        }
    }

    function resetTableOfContents() {
        setShifted(false);
        setCurrentSection(null);

        gsap.to(containerRef.current, {
            x: 0,
            duration: 0.8,
            ease: "power1.inOut"
        });

        if (imageContainerRef.current) {
            const el = imageContainerRef.current;
            gsap.fromTo(el,
                { opacity: 1, scale: 1 },
                {
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.5,
                    ease: "power1.inOut",
                    onComplete: () => {
                        el.style.display = 'none';
                    }
                }
            );
        }
    }

    function showPreview(section: string) {
        const isDesktop = window.innerWidth >= 1024;
        if (!isDesktop) {
            setCurrentSection(section);
            return;
        }

        if (!shift) {
            shiftTableOfContents(section);
            return;
        }

        if (currentSection === section) return;
        setCurrentSection(section);

        if (imageContainerRef.current) {
            const el = imageContainerRef.current;
            el.style.display = 'block';

            gsap.fromTo(el,
                { opacity: 1, scale: 1 },
                {
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.3,
                    ease: "power1.inOut",
                    onComplete: () => {
                        el.style.backgroundImage = `url(${sectionImages[section as keyof typeof sectionImages]})`;
                        gsap.fromTo(el,
                            { opacity: 0, scale: 0.95 },
                            { opacity: 1, scale: 1, duration: 0.5, ease: "power1.inOut" }
                        );
                    }
                }
            );
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
                    className="fixed right-0 top-1/2 transform -translate-y-1/2 h-[70vh] lg:w-1/4 bg-cover bg-center rounded-2xl shadow-xl"
                    style={{ display: 'none' }}
                />

                <h2 className="relative text-6xl font-bold mb-8 pb-4 text-center">
                    Table of Contents
                    <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-90 border-b-3 border-white shadow-md"></span>
                </h2>

                <ul ref={ulRef} className="text-5xl space-y-10 font-semibold text-center">
                    <li>
                        <a
                            href="#projects"
                            className="hover:text-[#b5dcff] transition-all duration-300 inline-block hover:scale-110"
                            onMouseOver={() => showPreview("projects")}
                        >
                            1. Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#pictures"
                            className="hover:text-[#b5dcff] transition-all duration-300 inline-block hover:scale-110"
                            onMouseOver={() => showPreview("pictures")}
                        >
                            2. Pictures
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="hover:text-[#b5dcff] transition-all duration-300 inline-block hover:scale-110"
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