import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

function Projects() {
    // State to track the current index of the project
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    // Function to handle next project navigation
    const handleNext = () => {
        if (currentProjectIndex < PROJECTS.length - 1) {
            setCurrentProjectIndex(currentProjectIndex + 1);
        }
    };

    // Function to handle previous project navigation
    const handlePrev = () => {
        if (currentProjectIndex > 0) {
            setCurrentProjectIndex(currentProjectIndex - 1);
        }
    };

    return (
        <div className='min-h-screen flex flex-col items-center justify-center border-b border-neutral-900 pb-4 text-center'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-4xl'>Projects</motion.h2>

            {/* Project Card Section */}
            <div className='flex flex-col items-center'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='w-full lg:w-3/4 mb-6 p-6 bg-neutral-800 rounded'
                    style={{ height: '500px' }}  // Increased card height to 500px
                >
                    {/* Scrollable Code Display */}
                    <pre className='whitespace-pre-wrap text-left bg-neutral-900 p-4 rounded text-white max-h-full overflow-y-auto'>
                        <code>
                            {PROJECTS[currentProjectIndex]?.code}
                        </code>
                    </pre>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                    className='max-w-xl'>
                    <h6 className='mb-2 text-2xl font-semibold'>
                        {PROJECTS[currentProjectIndex]?.title}
                    </h6>
                    <p className='mb-4 text-neutral-400'>
                        {PROJECTS[currentProjectIndex]?.description}
                    </p>
                    <div className='flex flex-wrap justify-center'>
                        {PROJECTS[currentProjectIndex]?.technologies?.map((tech, index) => (
                            <span key={index} className='mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Navigation buttons */}
            <div className="mt-8 flex justify-center space-x-4">
                <button
                    onClick={handlePrev}
                    disabled={currentProjectIndex === 0}
                    className="px-4 py-2 bg-neutral-900 text-white rounded disabled:opacity-50">
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    disabled={currentProjectIndex === PROJECTS.length - 1}
                    className="px-4 py-2 bg-neutral-900 text-white rounded disabled:opacity-50">
                    Next
                </button>
            </div>
        </div>
    );
}

export default Projects;
