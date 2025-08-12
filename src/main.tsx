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

function Root() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} duration={2500} />
  ) : (
    <>
      {/* Barre de progression de scroll en haut de la page */}
      <ScrollProgress />
      <Navigation />
      <App />
      <TableOfContents />
      {/* Section projets (aperçu) */}
      <Projects />
      {/* Sections détaillées pour chaque projet */}
      {projectsData.map((p) => (
        <ProjectSection key={p.id} project={p} />
      ))}
      {/* Galerie de photos */}
      <Pictures />
      {/* Section à propos */}
      <About />
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);