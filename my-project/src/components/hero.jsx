import React, { useState } from 'react'
import { HERO_CONTENT } from "../constants/index"
import profile from "../assets/IMG_0229.png"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Navbar from './navbar';
const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})


function Hero() {
    const [show, setShow] = useState(false);
    return (
        <>
            <Navbar setShow={setShow} show={show} />
            <div className='border-b border-neutral-900 pb-4'>
                <div className='flex flex-wrap'>
                    <div className='w-full lg:w-1/2'>
                        <div className='flex flex-col items-center lg:items-start py-20  px-10'>
                            <div className="">
                                <motion.p
                                    initial="hidden"
                                    animate="visible"
                                    variants={container(0)}
                                    className='text-4xl font-medium tracking-tight lg:text-6xl lg:mt-4'>
                                    <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent'>Hello,</span> I'm
                                </motion.p>

                                <motion.h1
                                    initial="hidden"
                                    animate="visible"
                                    variants={container(0)}
                                    className='text-4xl font-medium tracking-tight lg:text-5xl lg:mt-4 lg:mb-7'>
                                    Shahid Yaaser
                                </motion.h1>

                                <motion.span
                                    initial="hidden"
                                    animate="visible"
                                    variants={container(0.5)}
                                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent mt-10'>
                                    QA Engineer
                                </motion.span>
                            </div>
                            <motion.p
                                initial="hidden"
                                animate="visible"
                                variants={container(1)}
                                className='max-w-xl text-white pb-6 pt-4'>
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
                                className="w-[500px] h-[560px] rounded-lg object-cover"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }}
                                src={profile} alt="" />
                        </div>
                    </div>
                </div>
                {show &&
                    (
                        <motion.div
                            // initial={{ x: "100%" }}
                            // whileInView={{ x: 0 }}
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            onClick={() => setShow(!show)}
                            className='absolute top-0 right-0 w-[80px] h-full bg-gradient-to-b from-purple-700 to-purple-400 bg-clip-content    text-3xl text-transparent z-10'>
                            <div className='w-full h-full flex justify-center items-center gap-6 text-white'>
                                <div className='flex flex-col justify-center items-center gap-6 text-white'>
                                    {/* line */}
                                    <div className='w-[1px] h-[70px] bg-white'></div>
                                    {/* social icon */}
                                    <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                                        <a href="https://www.linkedin.com/in/shahid-yaaser-6066671b9/" target="_blank" rel="noopener noreferrer">

                                            <FaLinkedin className='text-2xl' />
                                        </a>
                                    </div>
                                    {/* social icon */}
                                    <div className='inline-block p-2 rounded-full cursor-pointer border border-white'>
                                        <a href="https://github.com/shahidyaaser" target="_blank" rel="noopener noreferrer">

                                            <FaGithub className='text-2xl' />
                                        </a>
                                    </div>
                                    {/* line */}
                                    <div className='w-[1px] h-[70px] bg-white'></div>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </div>
        </>
    )
}

export default Hero;
