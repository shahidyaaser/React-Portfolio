import React from 'react'
import { HERO_CONTENT } from "../constants/index"
import profile from "../assets/IMG_0229.jpg"
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

                        {/* Buttons Section */}
                        <div className="flex space-x-4 mt-4">
                            {/* Resume Button */}
                            <motion.a
                                initial="hidden"
                                animate="visible"
                                variants={container(1.5)}
                                href="https://drive.google.com/file/d/1cRuN8wpY-0SewaMP7lMof0n4ET25KTTi/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 bg-purple-600 text-white font-medium text-base rounded-full shadow-lg hover:bg-purple-700 transition-colors duration-300">
                                Resume
                            </motion.a>

                            {/* Cover Letter Button with Outline */}
                            <motion.a
                                initial="hidden"
                                animate="visible"
                                variants={container(1.6)}
                                href="https://drive.google.com/file/d/1DDxLvaPA244t8A7vp3zj72xCCzH3cg5u/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 border-2 border-purple-600 text-purple-600 font-medium text-base rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300">
                                Cover Letter
                            </motion.a>
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center'>
                        <motion.img
                            className="w-[500px] h-[500px] rounded-lg object-scale-down"
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
