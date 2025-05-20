import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const socialMediaLinks = [
     { icon: <FaWhatsapp size={40} />, link: 'https://wa.me/9729073920' },
    { icon: <FaInstagram size={40} />, link: 'https://www.instagram.com/parveen_chouhan_001?igsh=YTM2ZHByYWUwYWdo' },
    { icon: <FaTwitter size={40} />, link: 'https://x.com/parveen_015?t=bFNbzsvxHK5J2-bLIR1zXw&s=09' },
    { icon: <FaLinkedin size={40} />, link: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile' },
  ];

  const contactInfo = [
    { icon: <FaEnvelope size={40} />, link: 'mailto:parveenchouhan082@gmail.com' },
    { icon: <FaPhone size={40} />, link: 'tel:9729073920' },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-padding">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center text-4xl font-bold text-secondary mb-6"
        >
          Connect With Us
        </motion.h2>

        <div className="flex flex-col items-center gap-8 mt-8">
          <div className="flex gap-8">
            {socialMediaLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="text-secondary hover:text-blue transition-all"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* Contact Options */}
          <div className="flex gap-8 mt-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                className="text-secondary hover:text-blue transition-all"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* Catchy Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-textPrimary text-2xl font-semibold p-4 bg-tertiary rounded-xl shadow-lg"
          >
            We believe in building meaningful connections. Reach out, and let's create something amazing together!
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
