import { useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// Enregistre le plugin GSAP pour React. Cela permet d'utiliser
// l'animation dans les hooks useGSAP.
gsap.registerPlugin(useGSAP);

// Définition des photos et de leurs catégories. Les images sont
// importées via leur chemin relatif pour être correctement gérées
// par Vite. Vous pouvez ajouter autant d'images que souhaité en
// suivant le même modèle et en créant vos propres catégories.
const photos = [
  { id: 1, category: 'Portrait', src: 'src/assets/gallery/portrait1.png' },
  { id: 2, category: 'Portrait', src: 'src/assets/gallery/portrait2.png' },
  { id: 3, category: 'Portrait', src: 'src/assets/gallery/portrait3.png' },
  { id: 4, category: 'Street', src: 'src/assets/gallery/street1.png' },
  { id: 5, category: 'Street', src: 'src/assets/gallery/street2.png' },
  { id: 6, category: 'Street', src: 'src/assets/gallery/street3.png' },
  { id: 7, category: 'Nature', src: 'src/assets/gallery/nature1.png' },
  { id: 8, category: 'Nature', src: 'src/assets/gallery/nature2.png' },
  { id: 9, category: 'Nature', src: 'src/assets/gallery/nature3.png' },
  { id: 10, category: 'Nature', src: 'src/assets/gallery/nature1.png' },
];

const categories = ['All', 'Portrait', 'Street', 'Nature'];

export default function Pictures() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Filtre les photos selon la catégorie sélectionnée. Si "All"
  // est sélectionné, toutes les images sont renvoyées.
  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter((photo) => photo.category === selectedCategory);

  // Animation d'apparition des images au montage. Chaque photo
  // glisse et s'estompe lors de son apparition dans le DOM.
  useGSAP(() => {
    gsap.from('.photo-item', {
      opacity: 0,
      y: 30,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power2.out',
    });
  }, [selectedCategory]);

  return (
    <section id="pictures" className="bg-base-100 py-16 px-6 min-h-screen pt-30">
      <h2 className="text-5xl sm:text-6xl font-bold text-center mb-12" style={{ fontFamily: 'EB Garamond, serif' }}>
        Photos
      </h2>
      {/* Boutons de filtre */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border transition-colors duration-300 ${
              selectedCategory === cat
                ? 'bg-[#b5dcff] text-gray-900 border-transparent'
                : 'bg-transparent text-[#b5dcff] border-[#b5dcff]'
            } hover:bg-[#b5dcff] hover:text-gray-900`}
          >
            {cat}
          </button>
        ))}
      </div>
      {/* Grille masonry via colonnes */}
      <div className="  max-w-screen-xl mx-auto
  columns-[220px] sm:columns-[260px] md:columns-[300px] lg:columns-[340px]
  gap-4 space-y-4">
        {filteredPhotos.map((photo) => (
          <img
            key={photo.id}
            src={photo.src}
            alt={photo.category}
            className="photo-item w-full rounded-lg cursor-pointer transition-transform duration-300 hover:scale-105 shadow-lg"
            onClick={() => setLightboxImage(photo.src)}
          />
        ))}
      </div>
      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <img
            src={lightboxImage}
            alt="preview"
            className="max-w-3xl w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-gray-700"
          />
        </div>
      )}
    </section>
  );
}