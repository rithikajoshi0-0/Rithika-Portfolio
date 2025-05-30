import React from 'react';
import { motion } from 'framer-motion';

interface EnchantedButtonProps {
  icon: React.ReactNode;
  text: string;
  link: string;
  color: 'lavender' | 'mint' | 'blush' | 'periwinkle';
}

const EnchantedButton: React.FC<EnchantedButtonProps> = ({ icon, text, link, color }) => {
  const getColorClasses = (colorName: string) => {
    switch (colorName) {
      case 'lavender':
        return {
          bg: 'bg-lavender-light/30',
          text: 'text-lavender-dark',
          hover: 'hover:bg-lavender-light/50',
          shadow: 'shadow-lavender/20'
        };
      case 'mint':
        return {
          bg: 'bg-mint-light/30',
          text: 'text-mint-dark',
          hover: 'hover:bg-mint-light/50',
          shadow: 'shadow-mint/20'
        };
      case 'blush':
        return {
          bg: 'bg-blush-light/30',
          text: 'text-blush-dark',
          hover: 'hover:bg-blush-light/50',
          shadow: 'shadow-blush/20'
        };
      case 'periwinkle':
        return {
          bg: 'bg-periwinkle-light/30',
          text: 'text-periwinkle-dark',
          hover: 'hover:bg-periwinkle-light/50',
          shadow: 'shadow-periwinkle/20'
        };
      default:
        return {
          bg: 'bg-lavender-light/30',
          text: 'text-lavender-dark',
          hover: 'hover:bg-lavender-light/50',
          shadow: 'shadow-lavender/20'
        };
    }
  };

  const colorClasses = getColorClasses(color);

  return (
    <motion.a
      href={link}
      className={`block p-4 rounded-lg ${colorClasses.bg} ${colorClasses.hover} ${colorClasses.text} transition-all duration-300 font-mono text-sm shadow-sm hover:shadow-md`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/70">
          {icon}
        </span>
        <span>{text}</span>
      </div>
    </motion.a>
  );
};

export default EnchantedButton;