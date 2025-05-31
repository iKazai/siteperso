// filepath: d:\siteperso\src\main.tsx
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Navigation from './Navigation.tsx';
import App from './App.tsx';
import TableOfContents from './Table.tsx';
import SplashScreen from './SplashScreen.tsx';

function Root() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} duration={2500} />
  ) : (
    <>
      <Navigation />
      <App />
      <TableOfContents />
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);