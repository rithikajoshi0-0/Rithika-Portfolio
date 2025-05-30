import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Sparkles, GripHorizontal } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import EnchantedButton from './ui/EnchantedButton';
import FloatingElement from './ui/FloatingElement';

const EnchantedLab: React.FC = () => {
  return (
    <section id="lab" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cream-light to-transparent z-10"></div>
      
      <div className="container mx-auto px-6 relative z-20">
        <SectionTitle
          title="Enchanted Lab"
          icon={<Beaker size={20} className="text-mint-dark" />}
          subtitle="Where curiosity meets technology"
        />

        <div className="mt-12 max-w-4xl mx-auto">
          <motion.div 
            className="bg-gradient-to-br from-lavender-light/30 to-periwinkle-light/30 p-8 rounded-2xl shadow-soft relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blush-dark"></span>
              <span className="w-3 h-3 rounded-full bg-mint-dark"></span>
              <span className="w-3 h-3 rounded-full bg-lavender-dark"></span>
            </div>
            
            <div className="absolute top-4 left-4">
              <GripHorizontal size={16} className="text-charcoal/30" />
            </div>

            <div className="pt-8">
              <div className="text-lg text-charcoal font-mono mb-2">// Welcome to Rithika's Research Lab</div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-sm">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <EnchantedButton
                      icon={<Sparkles size={16} />}
                      text="cast.spell('see projects')"
                      link="#wonders"
                      color="lavender"
                    />
                    
                    <EnchantedButton
                      icon={<span className="text-lg">🦋</span>}
                      text="unlock('my dream project')"
                      link="#soft-systems"
                      color="mint"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <EnchantedButton
                      icon={<span className="text-lg">🌙</span>}
                      text="send.message('Write to Rithika')"
                      link="#contact"
                      color="blush"
                    />
                    
                    <EnchantedButton
                      icon={<span className="text-lg">📝</span>}
                      text="explore.thoughts()"
                      link="#notebook"
                      color="periwinkle"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-8 font-mono text-charcoal/70 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-mint-dark">{">"}</span>
                  <div>
                    <div className="mb-1">Running AI experiments...</div>
                    <div className="h-6 flex items-center gap-2">
                      <span>Progress:</span>
                      <div className="relative w-48 h-2 bg-lavender-light/30 rounded-full overflow-hidden">
                        <motion.div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-lavender to-periwinkle-dark rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '75%' }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />
                      </div>
                      <span>75%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute bottom-10 left-10 hidden md:block">
          <FloatingElement speed={2} className="text-mint opacity-70">
            ✧
          </FloatingElement>
        </div>
        <div className="absolute top-1/4 right-10 hidden md:block">
          <FloatingElement speed={3} className="text-lavender-light opacity-70">
            ✧
          </FloatingElement>
        </div>
      </div>
    </section>
  );
};

export default EnchantedLab;