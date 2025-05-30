import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, icon }) => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-2 inline-flex items-center gap-2"
      >
        {icon && icon}
        <h2 className="font-serif text-3xl text-charcoal-dark">{title}</h2>
      </motion.div>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-charcoal-light"
      >
        {subtitle}
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-4 mb-2 mx-auto w-16 h-1 bg-gradient-to-r from-lavender to-blush rounded-full"
      />
    </div>
  );
};

export default SectionTitle;