import React from 'react';

const Experience: React.FC = () => {
  const items = [
    { 
      title: "Software Engineer", 
      date: "March 2025 - Present", 
      company: "Digital Energy and Integrated Services Limited",
      description: "Developing enterprise software solutions for energy management. Implementing robust architectures and optimizing system performance."
    },
    { 
      title: "Frontend Developer", 
      date: "August 2024 - February 2025", 
      company: "ALX Nigeria", 
      description: "Developed responsive web applications using React.js and modern CSS frameworks." 
    },
    { 
      title: "Frontend Developer", 
      date: "April 2023 - September 2024", 
      company: "HiiT PLC", 
      description: "Built and maintained responsive web applications using React and TypeScript. Implemented modern UI/UX designs and optimized application performance."
    },
    { 
      title: "Web developer", 
      date: "February 2020 - January 2023", 
      company: "G-Skills Stack Services LTD",
      description: "Developed and deployed web applications for educational platforms. Implemented responsive designs and integrated backend services."
    },
    { 
      title: "Bachelor of Science in Computer Science",
      date: "2018 - 2022", 
      company: "Anchor University Lagos", 
      description: "Specialized in data structures, algorithms, and software engineering. Focused on system design and database management."
    },
  ];

  return (
    <section id="experience" className="py-24 bg-dark/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">
            Experience & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-text-light mt-4 max-w-2xl mx-auto">My professional journey and academic background</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary -ml-px"></div>
          
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`relative py-10 px-4 md:px-10 ${index % 2 === 0 ? 'md:pr-0 md:pl-10 md:text-right' : 'md:pl-0 md:pr-10 md:text-left'}`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:float-left' : 'md:float-right'}`}>
                <div className="card-bg rounded-custom p-8 shadow-custom">
                  <h3 className="text-xl font-bold mb-2 text-primary font-poppins">{item.title}</h3>
                  <span className="text-secondary font-semibold block mb-3">{item.date}</span>
                  <p className="font-medium mb-3">{item.company}</p>
                  <p className="text-text-light">{item.description}</p>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className={`absolute top-1/2 w-5 h-5 bg-primary rounded-full -mt-2.5 ${index % 2 === 0 ? 'right-0 md:right-[-2.5px]' : 'left-0 md:left-[-2.5px]'}`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;