import './styles/Table.css';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const imageContainerRef = useRef<HTMLDivElement>(null);

    function shiftTableOfContents(section: string) {
        const isDesktop = window.innerWidth >= 1024;
        if (!isDesktop) {
            setCurrentSection(section);
            return;
        }

        setShifted(true);
        setCurrentSection(section);
    }

    function resetTableOfContents() {
        setShifted(false);
        setCurrentSection(null);
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
    }

    const menuItems = [
        { id: 'projects', label: '1. Projects', href: '#projects' },
        { id: 'skills', label: '2. Skills', href: '#skills' },
        { id: 'pictures', label: '3. Pictures', href: '#pictures' },
        { id: 'about', label: '4. About', href: '#about' },
        { id: 'contact', label: '5. Contact', href: '#contact' },
    ];

    return (
        <>
            <motion.div
                ref={containerRef}
                id="tableofcontents"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="TableOfContents bg-base-100 h-screen flex flex-col justify-center items-center p-6 overflow-hidden relative"
                style={{ fontFamily: 'EB Garamond, serif' }}
                onMouseLeave={resetTableOfContents}
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5 pointer-events-none"></div>

                {/* Conteneur d'image fixe pour chaque section */}
                <AnimatePresence>
                    {shift && currentSection && sectionImages[currentSection as keyof typeof sectionImages] && (
                        <motion.div
                            ref={imageContainerRef}
                            initial={{ opacity: 0, x: 50, scale: 0.9 }}
                            animate={{ 
                                opacity: 1, 
                                x: shift ? 0 : 50, 
                                scale: 1 
                            }}
                            exit={{ opacity: 0, x: 50, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            className="fixed right-10 top-1/2 transform -translate-y-1/2 h-[70vh] w-1/4 bg-cover bg-center rounded-2xl shadow-2xl border-2 border-white/10 hidden lg:block"
                            style={{ backgroundImage: `url(${sectionImages[currentSection as keyof typeof sectionImages]})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl"></div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    animate={{ x: shift ? -150 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="relative z-10"
                >
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative text-6xl font-bold mb-8 pb-4 text-center"
                    >
                        Table of Contents
                        <span className="absolute left-1/2 bottom-0 -translate-x-1/2 w-90 border-b-3 border-white shadow-md"></span>
                    </motion.h2>

                    <ul className="text-5xl space-y-10 font-semibold text-center">
                        {menuItems.map((item, index) => (
                            <motion.li
                                key={item.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <motion.a
                                    href={item.href}
                                    whileHover={{ scale: 1.1, x: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="hover:text-[#b5dcff] transition-all duration-300 inline-block relative group"
                                    onMouseOver={() => showPreview(item.id)}
                                >
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#b5dcff] to-[#a78bfa] group-hover:w-full transition-all duration-300"></span>
                                </motion.a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </>
    );
}