import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { PROJECTS } from '../constants';

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-black text-white rounded-lg p-4 sm:p-6 md:p-8 max-w-full sm:max-w-2xl md:max-w-4xl w-[95vw] max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent mt-6 sm:mt-8 md:mt-10">
            {project.title}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <RxCross2 size={24} />
          </button>
        </div>
        <p className="mb-4">{project.description}</p>
        <p>{project?.extra}</p>
        <h3 className="text-md sm:text-lg font-semibold mb-2">Technologies:</h3>
        <ul className="list-disc list-inside mb-4">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <h3 className="text-md sm:text-lg font-semibold mb-2">Deepview:</h3>
        <pre className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white p-4 rounded-lg overflow-x-auto text-sm sm:text-base leading-6 sm:leading-7 font-light font-mono shadow-lg">
          <p>{project.code}</p>
        </pre>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onOpen }) => {
  return (
    <div className="bg-gray-800 w-full sm:w-[400px] md:w-[500px] h-auto flex flex-col items-center justify-center duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 p-6 sm:p-8 rounded-lg mix-blend-luminosity transition-all">
      <h3 className="uppercase text-lg sm:text-xl md:text-2xl font-bold text-center">{project.title}</h3>
      <p className="text-xs sm:text-sm leading-6 sm:leading-7 my-3 font-light opacity-50 text-center">{project.description}</p>
      <div className='flex flex-col items-center justify-center'>
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {project.technologies.map((item, techIndex) => (
            <span key={techIndex} className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-xs sm:text-sm font-medium text-purple-800'>
              {item}
            </span>
          ))}
        </div>
        <button
          className="bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-gray-500 transition-colors"
          onClick={onOpen} >
          View More
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="py-4">
      <h2 className="my-10 sm:my-20 text-center text-3xl sm:text-4xl font-bold">Projects</h2>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center max-w-7xl mx-auto gap-6 sm:gap-8 group">
        {PROJECTS?.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onOpen={() => openModal(project)}
          />
        ))}
      </div>
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;
