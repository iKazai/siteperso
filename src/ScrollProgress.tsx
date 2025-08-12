import { useEffect, useState } from 'react';

/**
 * Affiche une barre de progression horizontale en haut de l'écran indiquant
 * la progression de l'utilisateur dans la page. La largeur de la barre est
 * calculée en fonction du ratio entre la position de défilement et la
 * hauteur totale du document. La couleur suit un dégradé repris du thème.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 z-50 bg-gradient-to-r from-[#b5dcff] via-[#C3F7D4] to-[#84e6e5]"
      style={{ width: `${progress}%` }}
    />
  );
}