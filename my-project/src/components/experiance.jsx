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
                className='my-20 text-center text-4xl'>Experience</motion.h2>
            <div>
                {
                    EXPERIENCES?.map((experiance, index) => (
                        <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className='w-full lg:w-1/2'>
                                <p className='mb-2 text-sm text-white pl-60 font-semiboldbold'>{experiance?.year}</p>
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className='w-full max-w-xl lg:w-3/4 ml-[-130px]'> {/* ml-[-130px] - Extra added by shahid */}
                                <h6 className='mb-2 font-semibold'>
                                    {experiance?.role} - {" "}
                                    <span className='text-purple-400 text-l'>{experiance?.company}</span>
                                </h6>
                                <p className='text-neutral-300 mb-4'>{experiance?.description}</p>
                                {experiance?.technologies?.map((item, index) => (
                                    <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-600'>
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

export default Experiance
