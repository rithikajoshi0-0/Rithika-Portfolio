import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const SoftSystems: React.FC = () => {
  return (
    <section id="soft-systems" className="py-20 bg-gradient-to-b from-white to-blush-light/20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        <SectionTitle
          title="The Soft Side of Systems"
          icon={<Heart size={20} className="text-blush-dark" />}
          subtitle="Where empathy meets technology"
        />

        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white rounded-2xl shadow-soft p-6 relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blush to-lavender"></div>
              <h3 className="font-playfair text-2xl mb-4 text-charcoal-dark">Ethics in AI</h3>
              <p className="text-charcoal leading-relaxed mb-4">
                I believe that technology should empower and uplift humanity, not replace or diminish it. My work focuses on developing AI systems that are transparent, fair, and beneficial.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Ethics", "Fairness", "Transparency", "Accountability"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-blush-light/30 text-blush-dark text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl shadow-soft p-6 relative overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-mint to-periwinkle"></div>
              <h3 className="font-playfair text-2xl mb-4 text-charcoal-dark">Human-AI Collaboration</h3>
              <p className="text-charcoal leading-relaxed mb-4">
                I design systems that augment human creativity and intellect, fostering a symbiotic relationship between humans and AI where both can achieve more together than separately.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Collaboration", "Creativity", "Augmentation", "Co-creation"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-mint-light/30 text-mint-dark text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-8 bg-white rounded-2xl shadow-soft p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lavender to-periwinkle"></div>
            <h3 className="font-playfair text-2xl mb-4 text-charcoal-dark">My Dream Project</h3>
            <p className="text-charcoal leading-relaxed mb-6">
              I'm currently working on an AI-powered creative assistant that helps writers, artists, and designers overcome creative blocks by providing personalized, ethically-sourced inspiration while respecting their unique creative voice.
            </p>
            
            <div className="bg-lavender-light/20 p-5 rounded-lg border border-lavender-light">
              <blockquote className="italic text-charcoal-light font-handwritten text-xl leading-relaxed">
                "Technology should feel like magic—intuitive, delightful, and transformative—while remaining ethical and human-centered at its core."
              </blockquote>
              <div className="text-right mt-2 text-charcoal-light">— My research philosophy</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SoftSystems;