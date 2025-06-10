import './About.css';

export default function About() {
    return (
        <div id="about" className="hero bg-base-100 min-h-screen relative">
            <div className="hero-content flex-col lg:flex-row-reverse" style={{fontFamily: 'EB Garamond, serif'}}>
                <div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-5">Hello,</h1>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4">I'm Anjy STADELANN</h1>
                    <p className="py-6 text-base sm:text-lg md:text-xl lg:text-4xl text-justify leading-relaxed">
                        I'm an <strong>engineering student</strong> near Paris, <strong>studying computer science and applied mathematics</strong> to earn both an engineering degree and a master's in computer science. <br />
                        Beyond my studies, I love discovering new languages on personal projects, which I share on my <strong>GitHub</strong>, and <strong>capturing moments through photography</strong> on Instagram. I'm always exploring, building, and <strong>refining my skills</strong>.
                    </p>
                    
                    {/* Social Media Icons */}
                    <div className="flex justify-end items-center gap-20 mt-10 sm:mt-12 md:mt-16">
                        <a href="https://www.instagram.com/njyy_s_/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-500">
                            <img 
                                src="src/assets/logo/instagram-Logo.svg" 
                                alt="Instagram"
                                className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/anjy-stadelmann/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-500">
                            <img 
                                src="src/assets/logo/LinkedIn-Logo.svg" 
                                alt="LinkedIn"
                                className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14"
                            />
                        </a>
                        <a href="https://github.com/iKazai" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-500">
                            <img 
                                src="src/assets/logo/GitHub-Logo.svg" 
                                alt="GitHub"
                                className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14"
                                style={{ filter: 'brightness(0)' }} 
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
