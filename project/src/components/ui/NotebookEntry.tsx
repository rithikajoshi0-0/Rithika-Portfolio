import React from 'react';
import { motion } from 'framer-motion';
import { Thought } from '../../types';

interface NotebookEntryProps {
  thought: Thought;
  isEvenIndex: boolean;
}

const NotebookEntry: React.FC<NotebookEntryProps> = ({ thought, isEvenIndex }) => {
  return (
    <div className={`flex ${isEvenIndex ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-md ${isEvenIndex ? 'pr-4 md:pr-12' : 'pl-4 md:pl-12'}`}>
        <div className="bg-white/70 p-5 rounded-lg shadow-sm">
          <h3 className={`font-handwritten text-xl mb-2 ${isEvenIndex ? 'text-lavender-dark' : 'text-blush-dark'}`}>
            {thought.title}
          </h3>
          
          <p className="text-charcoal mb-3 leading-relaxed">
            {thought.content}
          </p>
          
          {thought.icon && (
            <div className="flex justify-end">
              <motion.div 
                className="text-2xl opacity-70"
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                {thought.icon}
              </motion.div>
            </div>
          )}
        </div>
        
        <div className={`flex ${isEvenIndex ? 'justify-start' : 'justify-end'} mt-2`}>
          <div className={`px-3 py-1 rounded-full text-xs font-medium
            ${isEvenIndex 
              ? 'bg-lavender-light/40 text-lavender-dark' 
              : 'bg-blush-light/40 text-blush-dark'
            }`}
          >
            {thought.tag}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotebookEntry;