import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="w-4/5 mx-auto">
          <div className="card-bg rounded-custom p-8 shadow-custom">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Left side - Main content */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-6">
                  <h3 className="text-2xl font-bold text-primary font-poppins">Hello, I'm</h3>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-poppins">
                    Osinowo Oluwaseun Paul
                  </h3>
                </div>
                <div className="space-y-6">
                  <p className="text-text-light">
                    I don't just write code I craft digital experiences that transform businesses and elevate brands. As a Software Engineer, I blend technical expertise with creative vision to build solutions that don't just work, but inspire.
                  </p>
                  <p className="text-text-light">
                    Every project I take on is an opportunity to push boundaries and create something extraordinary. I believe in building technology that not only solves problems but also delights users and drives real business growth.
                  </p>
                  <p className="text-text-light">
                    My approach combines meticulous attention to detail with a passion for innovation, ensuring that every solution I deliver is both technically sound and visually compelling. I'm not just building applications; I'm creating digital masterpieces that make a lasting impact.
                  </p>
                </div>
              </div>

              {/* Right side - Statistics */}
              <div className="md:w-1/3 flex flex-col gap-6">
                <div className="card-bg rounded-custom p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 hover:shadow-lg border border-primary/10">
                  <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                    25+
                  </div>
                  <div className="text-xl font-medium text-text-light text-center">Projects Completed</div>
                </div>
                
                <div className="card-bg rounded-custom p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300 hover:shadow-lg border border-primary/10">
                  <div className="text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                    4+
                  </div>
                  <div className="text-xl font-medium text-text-light text-center">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;