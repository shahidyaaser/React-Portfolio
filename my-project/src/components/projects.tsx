import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { PROJECTS } from '../constants'

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-black text-white rounded-lg p-8 max-w-3xl w-full max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mt-10">{project.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <RxCross2 size={24} />
          </button>
        </div>
        <p className="mb-4">{project.description}</p>
        <p>{project?.extra}</p>
        <h3 className="text-lg font-semibold mb-2">Technologies:</h3>
        <ul className="list-disc list-inside mb-4">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <h3 className="text-lg font-semibold mb-2">Details:</h3>
        <pre className="bg-black text-white p-4 rounded-lg overflow-x-auto">
          <p>{project.code}</p>
        </pre>
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
      <h2 className="my-20 text-center text-4xl">Projects</h2>

      <div className="flex justify-between max-w-5xl mx-auto gap-8 group">

        {PROJECTS?.map((project) => (

          <div className="bg-gray-800 w-[400px] h-[300px] duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-lg mix-blend-luminosity flex justify-center items-center flex-col transform transition-all">
            {/* title */}
            <h3 className="uppercase text-xl font-bold">{project.title}</h3>
            {/* description */}
            <p className="text-sm leading-7 my-3 font-light opacity-50">{project.description}</p>
            {/* technologies */}
            <div className='flex flex-col items-center justify-center'>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((item, techIndex) => (
                  <span key={techIndex} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                    {item}
                  </span>
                ))}
              </div>
              <button
                className="bg-purple-700 text-white py-2 px-4 rounded-full hover:bg-gray-500 transition-colors"
                onClick={() => openModal(project)} >
                View More
              </button>
            </div>

          </div>
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