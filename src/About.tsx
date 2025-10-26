import './styles/About.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const socialLinks = [
        { 
            href: "https://www.instagram.com/njyy_s_/", 
            src: "src/assets/logo/instagram-Logo.svg", 
            alt: "Instagram" 
        },
        { 
            href: "https://www.linkedin.com/in/anjy-stadelmann/", 
            src: "src/assets/logo/LinkedIn-Logo.svg", 
            alt: "LinkedIn" 
        },
        { 
            href: "https://github.com/iKazai", 
            src: "src/assets/logo/GitHub-Logo.svg", 
            alt: "GitHub" 
        },
    ];

    return (
        <div id="about" className="hero bg-base-100 min-h-screen relative" ref={ref}>
            <div className="px-6 hero-content flex-col lg:flex-row-reverse" style={{fontFamily: 'EB Garamond, serif'}}>
                <div>
                    <motion.h1 
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-5"
                    >
                        Hello,
                    </motion.h1>
                    <motion.h1 
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-[#b5dcff] to-[#a78bfa] bg-clip-text text-transparent"
                    >
                        I'm Anjy STADELMANN
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="py-6 text-base sm:text-lg md:text-xl lg:text-4xl text-justify leading-relaxed"
                    >
                        I'm an <strong>engineering student</strong> near Paris, <strong>studying computer science and applied mathematics</strong> to earn both an engineering degree and a master's in computer science. <br />
                        Beyond my studies, I love discovering new languages on personal projects, which I share on my <strong>GitHub</strong>, and <strong>capturing moments through photography</strong> on Instagram. I'm always exploring, building, and <strong>refining my skills</strong>.
                    </motion.p>
                    
                    {/* Social Media Icons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex justify-end items-center gap-20 mt-10 sm:mt-12 md:mt-16"
                    >
                        {socialLinks.map((link, index) => (
                            <motion.a 
                                key={link.alt}
                                href={link.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                                className="transform transition-transform duration-500"
                            >
                                <img 
                                    src={link.src} 
                                    alt={link.alt}
                                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14"
                                    onMouseOver={(e) => e.currentTarget.style.filter = link.alt === 'GitHub' ? 'brightness(6)' : 'brightness(1)'}
                                    onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(0)'}
                                    style = {{ filter: 'brightness(0)', transition: 'filter 0.5s ease' }}
                                />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
