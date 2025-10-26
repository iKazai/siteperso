import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaPython, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiCplusplus, SiTailwindcss, SiPostgresql } from 'react-icons/si';
import { ReactElement } from 'react';

interface Skill {
  name: string;
  level: number;
  icon: ReactElement;
  color: string;
}

const skills: Skill[] = [
  { name: 'React', level: 90, icon: <FaReact />, color: '#61DAFB' },
  { name: 'TypeScript', level: 85, icon: <SiTypescript />, color: '#3178C6' },
  { name: 'JavaScript', level: 90, icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'Python', level: 85, icon: <FaPython />, color: '#3776AB' },
  { name: 'C++', level: 80, icon: <SiCplusplus />, color: '#00599C' },
  { name: 'Node.js', level: 85, icon: <FaNodeJs />, color: '#339933' },
  { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'PostgreSQL', level: 75, icon: <SiPostgresql />, color: '#4169E1' },
  { name: 'Git', level: 85, icon: <FaGitAlt />, color: '#F05032' },
  { name: 'Docker', level: 70, icon: <FaDocker />, color: '#2496ED' },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="bg-base-100 py-20 px-6 min-h-screen" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-bold text-center mb-16"
          style={{ fontFamily: 'EB Garamond, serif' }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-base-200 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="text-4xl transition-transform duration-300 hover:scale-125"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{skill.name}</h3>
                  <div className="w-full bg-base-300 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
                      }}
                    />
                  </div>
                </div>
                <span className="text-2xl font-bold opacity-70">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
