import React from 'react';
import { CONTACT } from '../constants';
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
    return (
        <div className='border-b border-neutral-900 pb-20'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-10 text-center text-4xl'>
                Get In Touch
            </motion.h2>
            <div className='text-center tracking-tighter'>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='my-4 flex justify-center space-x-4'>
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} />
                    </a>
                </motion.div>
                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='my-4'>
                    {CONTACT?.phoneNo}
                </motion.p>
                <a href={`mailto:${CONTACT?.email}`} className='border-b'>{CONTACT?.email}</a>
            </div>
        </div>
    );
}

export default Contact;
