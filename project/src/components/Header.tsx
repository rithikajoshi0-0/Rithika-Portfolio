import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-soft py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#top" 
          className="flex items-center gap-2 group"
        >
          <Sparkles 
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-lavender-dark' : 'text-lavender'
            }`} 
            size={20} 
          />
          <span className={`font-serif text-xl transition-colors duration-300 ${
            isScrolled ? 'text-charcoal-dark' : 'text-charcoal'
          }`}>
            Rithika Joshi
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {['Wonders', 'Notebook', 'Lab', 'Soft Systems'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={`relative font-medium text-sm tracking-wide transition-colors duration-300 
                ${isScrolled ? 'text-charcoal-dark' : 'text-charcoal'}
                hover:text-lavender-dark
                after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] 
                after:w-0 after:bg-lavender-dark after:transition-all after:duration-300
                hover:after:w-full`}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className={`px-4 py-2 rounded-full transition-all duration-300 
              ${isScrolled 
                ? 'bg-lavender text-white hover:bg-lavender-dark' 
                : 'bg-white/80 text-lavender hover:bg-white hover:text-lavender-dark'
              }
              shadow-soft hover:shadow-md`}
          >
            <span className="font-medium text-sm">Contact</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-charcoal hover:text-lavender-dark transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-soft
          transition-all duration-300 overflow-hidden
          ${menuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {['Wonders', 'Notebook', 'Lab', 'Soft Systems'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="font-medium text-charcoal hover:text-lavender-dark transition-colors py-2"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="font-medium text-lavender-dark hover:text-lavender transition-colors py-2"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;