import React from 'react'
import { EXPERIENCES } from '../constants'
import { motion } from "framer-motion";

function Experiance() {
    return (
        <div className='border-b border-neutral-900 pb-4 mx-auto'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-10 sm:my-20 text-center text-2xl sm:text-4xl'>
                Experience
            </motion.h2>
            <div>
                {
                    EXPERIENCES?.map((experiance, index) => (
                        <div key={index} className='mb-8 flex flex-col lg:flex-row lg:justify-center'>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className='w-full lg:w-1/2 mb-4 lg:mb-0'>
                                <p className='mb-2 text-xs sm:text-sm text-white lg:pl-60 font-semibold'>
                                    {experiance?.year}
                                </p>
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className='w-full lg:max-w-xl lg:w-3/4 lg:ml-0 ml-0 px-4 sm:px-0'>
                                <h6 className='mb-2 font-semibold text-lg sm:text-xl'>
                                    {experiance?.role} - {" "}
                                    <span className='text-purple-400 text-base sm:text-l'>{experiance?.company}</span>
                                </h6>
                                <p className='text-neutral-300 mb-4 text-sm sm:text-base'>
                                    {experiance?.description}
                                </p>
                                {experiance?.technologies?.map((item, index) => (
                                    <span key={index} className='mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-xs sm:text-sm font-medium text-purple-600'>
                                        {item}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Experiance;
