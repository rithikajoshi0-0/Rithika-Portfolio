import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Linkedin, Github, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 bg-gradient-to-b from-blush-light/20 to-lavender-light/20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-20">
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-soft p-8 mb-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-lavender to-blush to-mint"></div>
          
          <div className="text-center mb-8">
            <h2 className="font-serif text-3xl mb-2 text-charcoal-dark inline-flex items-center gap-2">
              <Sparkles size={20} className="text-lavender" />
              Let's Connect
            </h2>
            <p className="text-charcoal-light">Have a question or want to collaborate? I'd love to hear from you!</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-charcoal">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-lavender-light/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-light transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-charcoal">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-lavender-light/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-light transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-charcoal">Message</label>
              <textarea 
                id="message" 
                rows={5} 
                className="w-full px-4 py-3 border border-lavender-light/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender-light transition-all"
                placeholder="Tell me about your project or question..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button 
                type="submit" 
                className="px-8 py-3 rounded-full bg-gradient-to-r from-lavender to-periwinkle-dark text-white font-medium shadow-soft hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
        
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {[
              { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/rithika-joshi-b-b24612328" },
              { icon: <Github size={20} />, href: "https://github.com/rithikajoshi0-0" },
        
              { icon: <Mail size={20} />, href: "rithikajoshi.b@gmail.com" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-charcoal hover:text-lavender-dark hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <div className="text-center text-charcoal-light text-sm">
            <p className="font-handwritten text-lg mb-2">🌸 Built with care, coffee & fairy dust.</p>
            <p>&copy; {new Date().getFullYear()} Rithika Joshi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
