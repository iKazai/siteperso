// filepath: d:\siteperso\src\main.tsx
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import Navigation from './Navigation.tsx';
import App from './App.tsx';
import TableOfContents from './Table.tsx';
import SplashScreen from './SplashScreen.tsx';
import About from './About.tsx';
import Projects from './Projects.tsx';
import ProjectSection from './ProjectSection.tsx';
import { projectsData } from './projectsData.tsx';
import Pictures from './Pictures.tsx';
import ScrollProgress from './ScrollProgress.tsx';
import Skills from './components/Skills.tsx';
import Contact from './components/Contact.tsx';
import ThemeToggle from './components/ThemeToggle.tsx';
import ParticlesBackground from './components/ParticlesBackground.tsx';
import Footer from './components/Footer.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';

function Root() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} duration={2500} />
  ) : (
    <>
      {/* Particle background */}
      <ParticlesBackground />
      {/* Barre de progression de scroll en haut de la page */}
      <ScrollProgress />
      {/* Theme toggle */}
      <ThemeToggle />
      {/* Scroll to top button */}
      <ScrollToTop />
      <Navigation />
      <App />
      <TableOfContents />
      {/* Section projets (aperçu) */}
      <Projects />
      {/* Sections détaillées pour chaque projet */}
      {projectsData.map((p) => (
        <ProjectSection key={p.id} project={p} />
      ))}
      {/* Skills section */}
      <Skills />
      {/* Galerie de photos */}
      <Pictures />
      {/* Section à propos */}
      <About />
      {/* Contact form */}
      <Contact />
      {/* Footer */}
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);