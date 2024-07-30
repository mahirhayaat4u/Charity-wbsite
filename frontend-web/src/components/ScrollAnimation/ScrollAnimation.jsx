// src/components/ScrollAnimation.jsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ScrollAnimation = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.1, // Adjust this as needed
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className="transition-all duration-500"
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
