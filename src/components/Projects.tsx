import React from 'react';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects = [
    {
      image: 'images/hrm.JPG',
      title: "HRM Management Office",
      tags: [
        { label: "Full Stack Development", color: "bg-accent-light text-accent" },
        { label: "SQL", color: "bg-primary-light text-primary" }
      ],
      description: "HRM system for employee management and assessment.",
      link: "https://hrmoffice.vercel.app/"
    },
    {
      image: 'images/namic.JPG',
      title: "NAMIC Community Center",
      tags: [
        { label: "Web Development", color: "bg-secondary-light text-secondary" },
      ],
      description: "Inclusive community center for education, events, and support.",
      link: "https://namic-center.vercel.app/"
    },
    {
      image: 'images/thozone.JPG',
      title: "ThoZoneVR",
      tags: [
        { label: "Web Development", color: "bg-secondary-light text-secondary" },
        { label: "VR", color: "bg-accent-light text-accent" },
        { label: "EdTech", color: "bg-primary-light text-primary" }
      ],
      description: "VR platform for immersive, interactive, and collaborative learning.",
      link: "https://thozonevr.vercel.app/"
    },
    
    {
      image: 'images/fresh.JPG',
      title: "FreshCrate",
      tags: [
        { label: "Web Development", color: "bg-secondary-light text-secondary" },
        { label: "FoodTech", color: "bg-primary-light text-primary" }
      ],
      description: "Meal kit platform delivering fresh, nutritious, and convenient food solutions.",
      link: "https://freshcrate-web.vercel.app/"
    },
    {
      image: 'images/Earth.JPG',
      title: "EarthTones",
      tags: [
        { label: "Web Development", color: "bg-secondary-light text-secondary" },
        { label: "Sustainability", color: "bg-primary-light text-primary" }
      ],
      description: "Nature-inspired platform promoting well-being and sustainability.",
      link: "https://earthtones-zeta.vercel.app/"
    },
    {
      image: 'images/teachers.JPG',
      title: "Teachers",
      tags: [
        { label: "Web Development", color: "bg-secondary-light text-secondary" },
        { label: "EdTech", color: "bg-primary-light text-primary" }
      ],
      description: "Platform connecting students with qualified teachers and teaching jobs in Nigeria.",
      link: "https://teacherrs.vercel.app/"
    },
  ];

  return (
    <section id="projects" className="py-24 lg:pt-32 overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-text-light mt-4 max-w-2xl mx-auto">Explore my latest work showcasing design and development expertise</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group card-bg rounded-custom overflow-hidden transition-all duration-500 hover:-translate-y-2 border-card-border hover:border-white/15 shadow-custom hover:shadow-xl"
            >
              <div className="relative flex items-center justify-center bg-neutral-900">
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full object-contain transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
                <div className="absolute bottom-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`px-4 py-1.5 rounded-full text-sm font-medium ${tag.color} backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-3 font-poppins group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-text-light mb-6 line-clamp-2">{project.description}</p>
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary font-medium transition-all duration-300 hover:text-secondary group-hover:translate-x-2"
                >
                  View Project <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;