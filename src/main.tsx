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

function Root() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} duration={2500} />
  ) : (
    <>
      <Navigation />
      <App />
      <TableOfContents />
      <Projects />
      {projectsData.map(p => <ProjectSection key={p.id} project={p} />)}
      <About />
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);