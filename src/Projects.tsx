import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Utilise la source de données centralisée pour les projets.
import { projectsData } from './projectsData.tsx';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-base-100 min-h-screen flex flex-col items-center justify-center p-5 box-border text-center text-gray-700 pt-20" id="projects" ref={ref}>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-5xl sm:text-4xl md:text-5xl mb-10 text-slate-700 font-['Orbitron']"
      >
        Portfolio
      </motion.h1>
      <div className="flex overflow-x-auto overflow-y-hidden w-full max-w-6xl pb-5 snap-x snap-mandatory touch-pan-x scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {projectsData.map((project, index) => {
          // Ancre vers la section détaillée. ProjectSection utilise id sous la forme project-{id}.
          const sectionId = `project-${project.id}`;
          return (
            <motion.a
              key={project.id}
              href={`#${sectionId}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="flex-shrink-0 w-4/5 max-w-[16rem] sm:w-3/5 md:max-w-xs lg:max-w-sm h-auto mr-5 relative overflow-hidden rounded-2xl shadow-xl snap-center transition-all duration-300 last:mr-0 block group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-auto object-cover block rounded-2xl transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 backdrop-blur-sm text-white p-4 box-border text-center rounded-b-2xl transition-all duration-300 group-hover:bg-opacity-80">
                <h2 className="m-0 text-xl sm:text-lg md:text-xl font-medium">{project.title}</h2>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
