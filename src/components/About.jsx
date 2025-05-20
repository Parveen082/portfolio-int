import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaTools, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <FaCode size={24} />,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML','CSS', 'Wordpress']
    },
    {
      category: 'Backend',
      icon: <FaServer size={24} />,
      items: ['Node.js', 'Express', 'REST APIs']
    },
    {
      category: 'Database',
      icon: <FaDatabase size={24} />,
      items: ['MongoDB',  'MySQL']
    },
    {
      category: 'Tools',
      icon: <FaTools size={24} />,
      items: ['Git', 'AWS', 'VS Code', 'Postman']
    }
  ];

  const education = [
    {
  degree: "Diploma in Computer Engineering",
  school: "Govt. Polytechnic Hisar",
  year: "2021 - 2024",
  description: "Learned the fundamentals of Computer Science, with a focus on Software Engineering . Gained hands-on experience through practical labs and academic projects."
},
    {
  degree: "12th Grade",
  school: "Goverment sr. sec. school saharwa",
  year: "2020-2021",
description: "Completed higher secondary education with a focus on core academic subjects. Actively participated in school activities and maintained a strong academic record."

}

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-textPrimary mb-4">About Me</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            I'm a passionate full-stack developer with a strong foundation in both frontend and backend technologies.
            I love creating efficient, scalable, and user-friendly applications.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-tertiary p-6 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-secondary">{skill.icon}</div>
                <h3 className="text-xl font-bold text-textPrimary">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <FaGraduationCap className="text-secondary text-2xl" />
            <h2 className="text-3xl font-bold text-textPrimary">Education</h2>
          </div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-secondary"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-secondary rounded-full" />
                <div className="bg-tertiary p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-textPrimary mb-2">{edu.degree}</h3>
                  <p className="text-secondary mb-2">{edu.school}</p>
                  <p className="text-textSecondary text-sm mb-3">{edu.year}</p>
                  <p className="text-textSecondary">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-textSecondary max-w-2xl mx-auto">
            I'm always eager to learn new technologies and best practices. When I'm not coding,
            you can find me contributing to open-source projects
            or exploring new development tools and frameworks.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 