import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Footer: React.FC = () => {
  return (
    <footer className="pt-8 pb-3 mt-16 bg-dark/90 border-t border-card-border overflow-x-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="mb-2">
          <span className="text-2xl md:text-3xl font-bold tracking-widest select-none bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Seun Osinowo</span>
        </div>
        <div className="mb-3 text-center">
          <p className="text-text-light text-base font-medium">Developing digital solutions. Delivering real results.</p>
        </div>
        <nav className="mb-3 w-full">
          {/* Mobile: two rows */}
          <div className="block md:hidden text-sm text-center">
            <div className="flex justify-center items-center gap-2 mb-1">
              <a href="#home" className="text-white font-semibold hover:text-primary transition-colors">Home</a>
              <span className="text-primary">|</span>
              <a href="#about" className="text-white font-semibold hover:text-primary transition-colors">About</a>
              <span className="text-primary">|</span>
              <a href="#skills" className="text-white font-semibold hover:text-primary transition-colors">Skills</a>
            </div>
            <div className="flex justify-center items-center gap-2">
              <a href="#experience" className="text-white font-semibold hover:text-primary transition-colors">Experience</a>
              <span className="text-primary">|</span>
              <a href="#projects" className="text-white font-semibold hover:text-primary transition-colors">Projects</a>
              <span className="text-primary">|</span>
              <a href="#contact" className="text-white font-semibold hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        
          {/* Desktop*/}
          <div className="hidden md:flex justify-center items-center gap-4 text-base">
            {navLinks.map((link, idx) => (
              <React.Fragment key={link.name}>
                <a href={link.href} className="text-white font-semibold hover:text-primary transition-colors whitespace-nowrap">{link.name}</a>
                {idx !== navLinks.length - 1 && <span className="text-primary">|</span>}
              </React.Fragment>
            ))}
          </div>
        </nav>

        <div className="flex gap-4 mb-2">
          <a href="https://www.linkedin.com/in/seun-osinowo-0174a1215/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 text-primary hover:bg-primary hover:text-dark transition-colors">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/seunosinowo" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 text-primary hover:bg-primary hover:text-dark transition-colors">
            <FaGithub />
          </a>
          <a href="https://x.com/SeunOsinowo22" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 text-primary hover:bg-primary hover:text-dark transition-colors">
            <FaXTwitter />
          </a>
        </div>
      </div>
      
      <div className="w-full text-center mt-3 pt-2">
        <p className="text-xs text-text-light tracking-wide">&copy; {new Date().getFullYear()} <a href="#home" className="font-semibold text-text-light transition-all hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent">Seun Osinowo</a>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;