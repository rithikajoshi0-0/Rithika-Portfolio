import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import FloatingElement from './ui/FloatingElement';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const speed = (element as HTMLElement).dataset.speed || '0.1';
        const yPos = scrollY * parseFloat(speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      id="top" 
      className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/5 w-40 h-40 rounded-full bg-lavender-light/30 blur-3xl parallax" data-speed="-0.03"></div>
        <div className="absolute bottom-1/4 right-1/5 w-64 h-64 rounded-full bg-mint-light/30 blur-3xl parallax" data-speed="-0.05"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 rounded-full bg-blush-light/30 blur-3xl parallax" data-speed="-0.02"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 relative inline-block"
          >
            <FloatingElement speed={1.5} className="flex justify-center mb-3">
              <Sparkles className="text-lavender" size={28} />
            </FloatingElement>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight text-charcoal-dark"
          >
            <span className="relative inline-block">
              Hi, I'm Rithika Joshi.
              <span className="absolute -top-6 -right-6">
                <FloatingElement speed={2} className="inline-block">
                  <span className="text-lavender font-handwritten text-2xl">✨</span>
                </FloatingElement>
              </span>
            </span>
            <br />
            <span className="relative">
              I weave tech with a
              <span className="relative mx-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-lavender to-periwinkle-dark">
                  touch of magic
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-lavender-light/40 rounded-full -z-0"></span>
              </span>
              .
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-lg md:text-xl text-charcoal-light max-w-2xl mx-auto mb-8 leading-relaxed">
              <span className="font-handwritten text-2xl text-blush-dark">AI researcher by day.</span>
              {" "}
              <span className="font-handwritten text-2xl text-lavender-dark">Dreamer by design.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <a 
              href="#wonders" 
              className="px-6 py-3 rounded-full bg-gradient-to-r from-lavender to-periwinkle-dark text-white font-medium shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              See My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-white text-charcoal font-medium shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-lavender-light/50"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-1/3 left-10 md:left-24">
        <FloatingElement speed={3} className="text-blush opacity-70">
          ●
        </FloatingElement>
      </div>
      <div className="absolute bottom-1/4 right-16 md:right-32">
        <FloatingElement speed={2.5} className="text-lavender-light opacity-70">
          ●
        </FloatingElement>
      </div>
      <div className="absolute top-1/4 right-1/4">
        <FloatingElement speed={4} className="text-mint-light opacity-70">
          ●
        </FloatingElement>
      </div>
    </section>
  );
};

export default Hero;