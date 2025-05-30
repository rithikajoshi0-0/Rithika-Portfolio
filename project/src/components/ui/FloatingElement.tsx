import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  children, 
  className = '', 
  speed = 3 
}) => {
  // Calculate a random delay between 0 and 2 seconds
  const randomDelay = Math.random() * 2;
  
  return (
    <motion.div
      className={className}
      animate={{ 
        y: [0, -10, 0],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: randomDelay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingElement;