import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";


import { motion } from "framer-motion";

function Navbar({ setShow, show }) {
    return (
        <nav className='mb-5 mr-4 flex items-center justify-end pt-6 '>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.2
                }}
                onClick={() => setShow(!show)}
            >
                <GiHamburgerMenu className="text-2xl cursor-pointer" />
            </motion.div>
        </nav>
    );
}

export default Navbar;
