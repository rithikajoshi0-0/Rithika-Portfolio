import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div 
      className="crystal-card rounded-xl overflow-hidden h-full flex flex-col"
      whileHover={{ 
        y: -5,
      }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url(${project.image})` }}
      />
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-playfair text-xl text-charcoal-dark mb-2">{project.title}</h3>
        
        <p className="text-charcoal-light text-sm mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 text-xs rounded-full font-medium"
              style={{ 
                backgroundColor: tag.color + '20', 
                color: tag.color 
              }}
            >
              {tag.name}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lavender-dark hover:text-lavender transition-colors flex items-center gap-1 text-sm font-medium"
            >
              <ExternalLink size={14} />
              <span>Live Demo</span>
            </a>
          )}
          
          {project.githubUrl && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-charcoal hover:text-charcoal-dark transition-colors flex items-center gap-1 text-sm font-medium"
            >
              <Github size={14} />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;