interface Project { 
  id: number; 
  title: string; 
  description: string; 
  imageUrl: string; 
  link: string; 
}

export type { Project };

export default function ProjectSection({ project }: { project: Project }) {
  return (
    <section id={`project-${project.id}`} className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-800 text-white rounded-lg my-10 mx-10 shadow-lg">
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4 text-[#C3F7D4]">{project.title}</h2>
        <p className="mb-6 max-w-md">{project.description}</p>
        <a
          href={project.link}
          className="inline-block px-6 py-2 border-2 border-white rounded-full text-white hover:bg-white hover:text-gray-800 transition"
        >
          GitHub
        </a>
      </div>
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}