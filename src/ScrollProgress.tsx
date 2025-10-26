import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Affiche une barre de progression horizontale en haut de l'écran indiquant
 * la progression de l'utilisateur dans la page. La largeur de la barre est
 * calculée en fonction du ratio entre la position de défilement et la
 * hauteur totale du document. La couleur suit un dégradé repris du thème.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 z-50 bg-gradient-to-r from-[#b5dcff] via-[#a78bfa] to-[#34d399] origin-left shadow-lg shadow-blue-500/50"
      style={{ scaleX }}
    />
  );
}