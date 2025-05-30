import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ui/ProjectCard';
import SectionTitle from './ui/SectionTitle';

const Projects: React.FC = () => {
  return (
    <section id="wonders" className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-lavender-light/20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <SectionTitle
          title="Wonders I've Built"
          icon={<Sparkles size={20} className="text-lavender" />}
          subtitle="Exploring the boundaries of AI and human connection"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a 
            href="https://github.com/rithikajoshi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-charcoal font-medium shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-lavender-light/50"
          >
            See More Projects <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;