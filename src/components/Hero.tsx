import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-32 pb-20 overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
           <div className="md:w-1/2 flex justify-center relative">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative animate-dance border-4 border-transparent bg-gradient-to-br from-primary via-accent to-secondary">
                <img 
                  src="images/seun.jpeg"
                  alt="Seun Osinowo" 
                  className="w-full h-full object-cover object-[center_10%]"
                />
              </div>
              <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary to-secondary -z-10 opacity-30 blur-xl animate-pulse"></div>
            </div>
          </div>

          <div className="md:w-1/2 text-center md:text-left px-2 sm:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 font-poppins">
              Software <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Engineer</span> & Problem Solver
            </h1>
            <p className="text-lg sm:text-xl text-text-light mb-8 mx-auto md:mx-0 max-w-[90%]">
              Transforming ideas into powerful digital tools that solve real problems. From websites to web applications, I create technology solutions that work for you in the simplest and most effective way possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;