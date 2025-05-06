import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A full-stack web application built with React and Node.js.',
      image: 'https://via.placeholder.com/400x300',
      tags: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/project1',
      live: 'https://project1.com',
    },
    {
      title: 'Project 2',
     description: "A fully functional Todo List application with user authentication.",

      image: 'https://via.placeholder.com/400x300',
      tags: ['Next.js', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2.com',
    },
    {
      title: 'Project 3',
      description: '"A responsive car rental website that allows users book cabs online.',
      image: 'https://via.placeholder.com/400x300',
      tags: ['html', 'css', 'javascript', 'php'],
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3.com',
    },
    {
      title: 'Project 4',
      description: 'A play areana website sayhowzzat',
      image: 'https://via.placeholder.com/400x300',
      tags: ['Wordpress'],
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3.com',
    },
    {
      title: 'Project 5',
      description: 'A play areana website funisland',
      image: 'https://via.placeholder.com/400x300',
      tags: ['Wordpress'],
      github: 'https://github.com/yourusername/project3',
      live: 'https://project3.com',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container-padding">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center"
        >
          My Projects
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-tertiary rounded-lg overflow-hidden group"
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textPrimary hover:text-secondary"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size={24} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textPrimary hover:text-secondary"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt size={24} />
                  </motion.a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-textPrimary mb-2">{project.title}</h3>
                <p className="text-textSecondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 