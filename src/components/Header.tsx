import React from 'react';
import { FaLinkedinIn, FaGithub, FaXTwitter } from 'react-icons/fa6';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-5 bg-dark bg-opacity-95 backdrop-blur border-b border-card-border">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Seun Osinowo
          </div>
          <ul className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Experience', 'Portfolio', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-text-light font-medium relative transition-colors hover:text-primary group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/seun-osinowo-0174a1215/" target="_blank" rel="noopener noreferrer" className="text-text-light transition-colors hover:text-primary hover:-translate-y-1">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/seunosinowo" target="_blank" rel="noopener noreferrer" className="text-text-light transition-colors hover:text-primary hover:-translate-y-1">
              <FaGithub />
            </a>
            <a href="https://x.com/SeunOsinowo22" target="_blank" rel="noopener noreferrer" className="text-text-light transition-colors hover:text-primary hover:-translate-y-1">
              <FaXTwitter/>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;