import React from 'react'
import { FaJava } from "react-icons/fa";
import { SiSelenium } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { FaSalesforce } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { motion } from "framer-motion";

const iconContainer = (duration) => ({
    initial: { x: -10, },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }

})

function Skills() {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    variants={iconContainer(2.5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaJava className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconContainer(3)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiSelenium className='text-7xl text-green-500' />
                </motion.div>
                <motion.div
                    variants={iconContainer(5)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaWordpress className='text-7xl text-sky-400' />
                </motion.div>
                <motion.div
                    variants={iconContainer(2)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaSalesforce className='text-7xl text-blue-500' />
                </motion.div>
                <motion.div
                    variants={iconContainer(4)}
                    initial="initial"
                    animate="animate"
                    className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPostman className='text-7xl text-orange-500' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Skills