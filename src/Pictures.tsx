import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Filtre les photos selon la catégorie sélectionnée. Si "All"
  // est sélectionné, toutes les images sont renvoyées.
  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter((photo) => photo.category === selectedCategory);

  return (
    <section id="pictures" className="bg-base-100 py-16 px-6 min-h-screen pt-30" ref={ref}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-6xl font-bold text-center mb-12" 
        style={{ fontFamily: 'EB Garamond, serif' }}
      >
        Photos
      </motion.h2>
      {/* Boutons de filtre */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        {categories.map((cat, index) => (
          <motion.button
            key={cat}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full border transition-colors duration-300 ${
              selectedCategory === cat
                ? 'bg-[#b5dcff] text-gray-900 border-transparent shadow-lg'
                : 'bg-transparent text-[#b5dcff] border-[#b5dcff]'
            } hover:bg-[#b5dcff] hover:text-gray-900`}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>
      {/* Grille masonry via colonnes */}
      <div className="max-w-screen-xl mx-auto columns-[220px] sm:columns-[260px] md:columns-[300px] lg:columns-[340px] gap-4 space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredPhotos.map((photo, index) => (
            <motion.img
              key={photo.id}
              src={photo.src}
              alt={photo.category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="w-full rounded-lg cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl"
              onClick={() => setLightboxImage(photo.src)}
            />
          ))}
        </AnimatePresence>
      </div>
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 cursor-pointer p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              src={lightboxImage}
              alt="preview"
              className="max-w-3xl w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}