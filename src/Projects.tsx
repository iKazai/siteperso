import React from 'react';

// Utilise la source de données centralisée pour les projets.
import { projectsData } from './projectsData.tsx';

const Projects: React.FC = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center p-5 box-border text-center text-gray-700 pt-20" id="projects">
      <h1 className="text-5xl sm:text-4xl md:text-5xl mb-10 text-slate-700 font-['Orbitron']">Portfolio</h1>
      <div className="flex overflow-x-auto overflow-y-hidden w-full max-w-6xl pb-5 snap-x snap-mandatory touch-pan-x scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {projectsData.map((project) => {
          // Ancre vers la section détaillée. ProjectSection utilise id sous la forme project-{id}.
          const sectionId = `project-${project.id}`;
          return (
            <a
              key={project.id}
              href={`#${sectionId}`}
              className="flex-shrink-0 w-4/5 max-w-[16rem] sm:w-3/5 md:max-w-xs lg:max-w-sm h-auto mr-5 relative overflow-hidden rounded-2xl shadow-xl snap-center transition-transform duration-300 ease-in-out hover:scale-105 last:mr-0 block"
            >
              <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover block rounded-2xl" />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4 box-border text-center rounded-b-2xl">
                <h2 className="m-0 text-xl sm:text-lg md:text-xl font-medium">{project.title}</h2>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
