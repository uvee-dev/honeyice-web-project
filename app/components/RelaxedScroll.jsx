'use client'

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const ScrollWrapper = ({ children }) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const translateY = scrollY * 0.2; // Ajusta el factor de velocidad según tus preferencias

      controls.start({ translateY: -translateY });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div
      initial={{ translateY: 0 }}
      animate={controls}
      transition={{ type: 'spring', damping: 30, stiffness: 80 }} // Ajusta estos valores según tus preferencias
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollWrapper;