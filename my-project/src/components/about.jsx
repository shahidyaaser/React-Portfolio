import React from 'react'
import aboutImg from "../assets/IMG_0632.jpg"
import { ABOUT_TEXT, ABOUT_TEXT_1, ABOUT_TEXT_2 } from '../constants'
import { motion } from "framer-motion";

function About() {
    return (
        <div className='border-b border-neutral-900 pb-8'>
            <h2 className='my-20 text-center text-4xl'>
                About
                <span className='text-neutral-500'>Me</span>
            </h2>

            <div className='flex flex-wrap mb-8'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/2'
                >
                    <div className='flex items-center justify-center'>
                        <img className='rounded-2xl h-[500px] w-[500px] object-cover' src={aboutImg} alt='' />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className='w-full lg:w-1/2'
                >
                    <div className='flex flex-col justify-center lg:justify-start'>
                        <p className=' max-w-xl'>{ABOUT_TEXT}</p>
                        <p className=' max-w-xl '>{ABOUT_TEXT_1}</p>
                        <p className='my-1 max-w-xl'>{ABOUT_TEXT_2}</p>

                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default About
