import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaClock } from 'react-icons/fa';

interface Project { 
  id: number; 
  title: string; 
  description: string; 
  imageUrl: string; 
  link: string; 
}

export type { Project };

export default function ProjectSection({ project }: { project: Project }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section 
      id={`project-${project.id}`} 
      ref={ref}
      className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm text-white rounded-2xl my-10 mx-4 md:mx-10 shadow-2xl border border-white/10 overflow-hidden relative"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left relative z-10"
      >
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#b5dcff] to-[#a78bfa] bg-clip-text text-transparent">
          {project.title}
        </h2>
        <p className="mb-6 max-w-md text-lg opacity-90 leading-relaxed">{project.description}</p>
        {project.link && project.link !== '#' ? (
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#b5dcff] to-[#a78bfa] rounded-full text-gray-900 font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            <FaGithub className="text-xl" />
            View on GitHub
          </motion.a>
        ) : (
          <span className="inline-flex items-center gap-3 px-6 py-3 border-2 border-gray-600 rounded-full text-gray-400 cursor-not-allowed" title="Coming soon">
            <FaClock />
            Coming Soon
          </span>
        )}
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 50, rotateY: -15 }}
        animate={inView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:w-1/2 flex justify-center mt-6 md:mt-0 relative z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotateY: 5 }}
          transition={{ duration: 0.3 }}
          className="relative group"
        >
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl border-2 border-white/10 transition-all duration-300 group-hover:border-[#b5dcff]/50"
          />
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-all duration-300"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}