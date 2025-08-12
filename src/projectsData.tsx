import type { Project } from './ProjectSection.tsx';

// Import des images pour chaque projet. Ces imports assurent
// que Vite inclut correctement les ressources statiques au moment
// du build. Si vous remplacez une image, conservez son nom ou
// modifiez l'import en conséquence.
import project1Img from './assets/projectImages/project1.png';
import project2Img from './assets/projectImages/project2.png';
import project3Img from './assets/projectImages/project3.png';
import project4Img from './assets/projectImages/project4.png';
import project5Img from './assets/projectImages/project5.png';

export const projectsData: Project[] = [
    {
        id: 1,
        title: 'SSH/SFTP GUI',
        description: 'A user-friendly GUI for SSH/SFTP operations, simplifying file transfers and remote server management.',
        imageUrl: project1Img,
        link: 'https://github.com/iKazai/sshsftpGUI',
    },
    {
        id: 2,
        title: 'AppEnsIIE',
        description: "AppEnsiiE est une application mobile développée en React Native qui centralise les outils numériques de l'ENSIIE afin de faciliter la vie étudiante. Elle regroupe les fonctionnalités essentielles provenant des différents sites web de l'école et de Discord.",
        imageUrl: project2Img,
        link: 'https://github.com/stevx04/appensiie',
    },
    {
        id: 3,
        title: 'NBA List - FullStack',
        description: 'A full-stack application that allows users to view and manage a list of NBA players, showcasing skills in both frontend and backend development.',
        imageUrl: project3Img,
        link: 'https://github.com/iKazai/FullStack_PROJ_1',
    },
    {
        id: 4,
        title: 'Schools projects',
        description: 'A collection of various school projects that demonstrate my skills in software development, algorithms, and data structures.',
        imageUrl: project4Img,
        link: '#',
    },
    {
        id: 5,
        title: 'Internship websites',
        description: 'A collection of websites developed during my internship, showcasing practical applications of my skills.',
        imageUrl: project5Img,
        link: '#',
    },
];