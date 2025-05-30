import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { thoughts } from '../data/thoughts';
import SectionTitle from './ui/SectionTitle';
import NotebookEntry from './ui/NotebookEntry';

const Notebook: React.FC = () => {
  return (
    <section id="notebook" className="py-20 bg-cream-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-lavender-light/20 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <SectionTitle
          title="Notebook of Curiosities"
          icon={<BookOpen size={20} className="text-blush-dark" />}
          subtitle="Thoughts, ideas, and explorations at the intersection of AI and humanity"
        />

        <motion.div 
          className="journal-page max-w-4xl mx-auto mt-12 p-8 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 gap-8">
            {thoughts.map((thought, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <NotebookEntry thought={thought} isEvenIndex={index % 2 === 0} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Notebook;