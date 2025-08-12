# Portfolio d'Anjy Stadelmann

Ce dépôt contient le code source du site vitrine personnel d'**Anjy Stadelmann**. Il s'agit d'une application *React 19* écrite en **TypeScript**, construite avec **Vite** et stylisée via **Tailwind CSS** et **DaisyUI**. Le site présente les projets d'Anjy, une galerie de photos, ainsi qu'une section "À propos".

## Aperçu des fonctionnalités

- **Accueil immersif** : un carrousel d'images animé avec un fondu au noir et un changement automatique toutes les 6 secondes.
- **Table des matières interactive** : une table des matières qui se décale pour révéler un aperçu visuel des sections au survol.
- **Section "Portfolio"** : présentation de projets avec un défilement horizontal; chaque carte renvoie à une section détaillée.
- **Sections détaillées** : pour chaque projet, description, image et lien vers GitHub ou mention "Bientôt" lorsque le dépôt n'est pas disponible.
- **Galerie de photos** : grille masonnées filtrable par catégories (Portrait, Street, Nature) avec lightbox intégrée.
- **À propos** : introduction personnelle avec liens vers les réseaux sociaux.
- **Barre de progression** : une barre fine indiquant l'avancement du scroll.
- **Animations GSAP** : de nombreuses transitions fluides pour améliorer l'expérience utilisateur.

## Prérequis

- Node.js (≥18)
- npm ou pnpm

## Installation

1. Clonez ce dépôt ou téléchargez l'archive ZIP.
2. Installez les dépendances :

   ```bash
   npm install
   # ou
   pnpm install
   ```
3. Démarrez le serveur de développement :

   ```bash
   npm run dev
   ```

Le site sera accessible à l'adresse indiquée dans le terminal (par défaut [http://localhost:5173](http://localhost:5173)).

## Personnalisation

- **Images du carrousel** : placez vos propres images dans `src/assets/homeCarousel/` et mettez‑les à jour si nécessaire dans `src/App.tsx`.
- **Photos de la galerie** : ajoutez ou remplacez les images dans `src/assets/gallery/` et ajustez le tableau `photos` dans `src/Pictures.tsx` pour référencer vos fichiers. Ajoutez de nouvelles catégories en mettant à jour le tableau `categories`.
- **Contenu des projets** : modifiez `src/projectsData.tsx` pour changer le titre, la description, l'image ou le lien GitHub d'un projet. Les images sont importées en haut du fichier.
- **Couleurs et thème** : changez les couleurs de la barre de progression ou des boutons en éditant les classes Tailwind dans les composants correspondants.

## Déploiement

Pour construire l'application prête pour la production :

```bash
npm run build
```

Les fichiers optimisés seront générés dans `dist/`. Vous pouvez ensuite héberger ce dossier sur Vercel, Netlify ou tout autre service statique.

## Licence

Ce projet est mis à disposition à des fins éducatives et personnelles. Vous êtes libre de le modifier et de le déployer pour votre usage personnel. N'hésitez pas à créditer l'auteur original lorsque vous partagez votre propre version.
