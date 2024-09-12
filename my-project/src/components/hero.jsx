import React from 'react'
import { HERO_CONTENT } from "../constants/index"
import profile from "../assets/kevinRushProfile.png"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

function Hero() {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={container(0)}
                            className='pb-16 text-4xl font-medium tracking-tight lg:mt-16 lg:text-6xl'>
                            Shahid Yaaser
                        </motion.h1>
                        <motion.span
                            initial="hidden"
                            animate="visible"
                            variants={container(0.5)}
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                            QA Engineer
                        </motion.span>
                        <motion.p
                            initial="hidden"
                            animate="visible"
                            variants={container(1)}
                            className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>

                        {/* Resume Button */}
                        <motion.a
                            initial="hidden"
                            animate="visible"
                            variants={container(1.5)}
                            href="https://drive.google.com/file/d/1be95wkRk7id6AVKJMd5vJ7rXQ90Gn6SF/view?usp=drivesdk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block px-6 py-3 bg-purple-600 text-white font-medium text-lg rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300">
                            Resume
                        </motion.a>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
