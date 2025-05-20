import { motion } from 'framer-motion';
import {  FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { icon: <FaWhatsapp size={24} />, url: 'https://wa.me/9729073920' },
    { icon: <FaLinkedin size={24} />, url: 'https://www.linkedin.com/in/parveen-chouhan-19a770301/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B5I6voqjdRw2Owzwsv%2BcGAQ%3D%3D' },
    { icon: <FaTwitter size={24} />, url: 'https://x.com/parveen_015?t=bFNbzsvxHK5J2-bLIR1zXw&s=09 ' },
  ];

  const mailtoLink = `mailto:parveenchouhan082@gmail.com?subject=Hiring%20Inquiry&body=Hi%20Parveen,%0A%0AWe%20want%20to%20hire%20you.%20Please%20contact%20us%20as%20soon%20as%20possible.%0A%0ABest%20Regards`;

  const featuredSkills = [
    { icon: <FaCode size={24} />, name: 'Frontend', description: 'React, Next.js, TypeScript , Tailwind CSS, wordpress' },
    { icon: <FaServer size={24} />, name: 'Backend', description: 'Node.js, Express, Python' },
    { icon: <FaDatabase size={24} />, name: 'Database', description: 'MongoDB, Mysql' },
    { icon: <FaTools size={24} />, name: 'Tools', description: 'Git, AWS , Hostinger' },
  ];

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '8+', label: 'Projects Completed' },
    { number: '5+', label: 'Happy Clients' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto container-padding py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-secondary text-lg mb-4">Hi, my name is</h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-textPrimary mb-4"
          >
            Parveen Chouhan
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-8"
          >
            I build full-stack applications.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-textSecondary max-w-2xl mx-auto mb-8 text-lg"
          >
            I'm a full-stack developer specializing in building exceptional digital experiences.
            Currently, I'm focused on creating robust and scalable web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="/projects"
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a
      href={mailtoLink}
      className="btn bg-secondary/10"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Hire Me
    </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex justify-center gap-6 mt-12"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-bold text-textPrimary text-center mb-12">Featured Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="bg-tertiary p-6 rounded-lg text-center"
                whileHover={{ y: -5 }}
              >
                <div className="text-secondary mb-4 flex justify-center">
                  {skill.icon}
                </div>
                <h4 className="text-xl font-bold text-textPrimary mb-2">{skill.name}</h4>
                <p className="text-textSecondary">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="mt-24"
        >
        <h3 className="text-2xl font-bold text-textPrimary text-center mb-12">My Stats</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                className="bg-tertiary p-8 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
              >
                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.2 + index * 0.1 }}
                  className="text-4xl font-bold text-secondary mb-2"
                >
                  {stat.number}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.4 + index * 0.1 }}
                  className="text-textSecondary"
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 