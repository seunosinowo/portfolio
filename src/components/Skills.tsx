import React from 'react';
import { FaJs, FaCode, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const Skills: React.FC = () => {
  const skills = [
    { icon: <FaJs size={32} />, title: "JavaScript", description: "Modern ES6+ features and best practices" },
    { icon: <FaCode size={32} />, title: "TypeScript", description: "Type safe development and interfaces" },
    { icon: <FaReact size={32} />, title: "React", description: "Component based UI development" },
    { icon: <FaHtml5 size={32} />, title: "HTML5", description: "Semantic markup and accessibility" },
    { icon: <FaCss3Alt size={32} />, title: "CSS3", description: "Responsive design and animations" },
    { icon: <FaNodeJs size={32} />, title: "Node.js", description: "Server side development" },
    { icon: <SiTailwindcss size={32} />, title: "Tailwind CSS", description: "Utility-first styling" },
    { icon: <FaPhp size={32} />, title: "PHP", description: "Web development with PHP" },
    { icon: <SiMongodb size={32} />, title: "MongoDB", description: "Database management" },
    { icon: <FaDatabase size={32} />, title: "SQL", description: "Relational database operations" },
  ];

  return (
    <section id="skills" className="py-4 overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-text-light mt-2 text-sm">Essential technologies I work with</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="card-bg rounded-lg p-4 md:p-6 flex flex-col items-center text-center transition-all hover:scale-105 border-card-border hover:border-white/15"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-primary-light text-primary mb-3 md:mb-4">
                {skill.icon}
              </div>
              <h3 className="text-sm md:text-base font-semibold mb-1 md:mb-2 font-poppins">{skill.title}</h3>
              <p className="text-xs md:text-sm text-text-light">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;