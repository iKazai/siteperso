import React from 'react';

// Import project images
import project1Img from './assets/projectImages/project1.png';
import project2Img from './assets/projectImages/project2.png';
import project3Img from './assets/projectImages/project3.png';
import project4Img from './assets/projectImages/project4.png';
import project5Img from './assets/projectImages/project5.png';

interface Project {
  id: number;
  title: string;
  imageUrl: string;
  section: string;
}

const projectsData: Project[] = [
  { id: 1, title: 'SSH/SFTP GUI', imageUrl: project1Img, section: 'sshguiSection' },
  { id: 2, title: 'AppEnsIIE', imageUrl: project2Img, section: 'appensiieSection' },
  { id: 3, title: 'NBA List - FullStack', imageUrl: project3Img, section: 'nbaListSection' },
  { id: 4, title: 'Schools projects', imageUrl: project4Img, section: 'schoolsProjectsSection' },
  { id: 5, title: 'Internship websites', imageUrl: project5Img, section: 'internshipWebsitesSection' },
];

const Projects: React.FC = () => {
  return (
    <div className="bg-base-100 min-h-screen flex flex-col items-center justify-center p-5 box-border text-center text-gray-700" id="projects">
      <h1 className="text-5xl sm:text-4xl md:text-5xl mb-10 text-slate-700 font-['Orbitron']">Portfolio</h1>
      <div className="flex overflow-x-auto overflow-y-hidden w-full max-w-6xl pb-5 snap-x snap-mandatory touch-pan-x scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {projectsData.map((project) => {
          const sectionId = `project-${project.id}`;
          return (
            <a
              key={project.id}
              href={`#${project.section}`}
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
