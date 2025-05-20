import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    {
  name: 'WhatsApp',
  url: 'https://wa.me/9729073920',
  icon: (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <path d="M16.001 2.998c-7.351 0-13.33 5.979-13.33 13.33 0 2.352.619 4.646 1.793 6.67l-1.879 6.867 7.052-1.853c1.933 1.059 4.112 1.618 6.364 1.618h.001c7.351 0 13.33-5.979 13.33-13.33s-5.979-13.33-13.33-13.33zm0 24.403c-1.91 0-3.786-.505-5.435-1.459l-.39-.229-4.186 1.1 1.117-4.048-.255-.417a10.573 10.573 0 01-1.562-5.553c0-5.855 4.765-10.62 10.62-10.62 5.855 0 10.62 4.765 10.62 10.62 0 5.855-4.765 10.62-10.62 10.62zm5.813-7.865c-.317-.158-1.872-.924-2.163-1.028-.291-.106-.504-.158-.717.158s-.823 1.028-1.01 1.24c-.185.211-.37.237-.686.079-.317-.158-1.34-.494-2.552-1.574-.943-.841-1.58-1.879-1.764-2.196-.185-.317-.02-.488.138-.646.141-.14.317-.37.476-.555.158-.185.211-.317.317-.529.106-.211.053-.396-.026-.555-.079-.158-.717-1.735-.982-2.379-.258-.62-.519-.537-.717-.547-.185-.009-.396-.011-.61-.011-.211 0-.555.079-.844.37-.29.291-1.104 1.079-1.104 2.63s1.131 3.05 1.288 3.259c.158.211 2.222 3.391 5.383 4.755.752.324 1.34.516 1.796.66.754.24 1.441.206 1.984.125.605-.09 1.872-.764 2.137-1.502.264-.737.264-1.37.185-1.502-.079-.132-.29-.211-.607-.37z" />
    </svg>
  ),
},

    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile',
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://x.com/parveen_015?t=bFNbzsvxHK5J2-bLIR1zXw&s=09 ',
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex space-x-6 mb-4"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                rel="noopener noreferrer"
                className="text-textSecondary hover:text-secondary transition-colors duration-300"
              >
                <span className="sr-only">{link.name}</span>
                {link.icon}
              </a>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-textSecondary text-sm"
          >
            © {new Date().getFullYear()} Parveen chouhan. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 