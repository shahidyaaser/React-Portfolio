import React from 'react';
// import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Navbar() {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
{/*             <div className='flex flex-shrink-0 items-center'>
                <img className='mx-2 w-10' src={logo} alt="Shahid's logo" />
            </div> */}
            <div className='m-8 flex justify-center items-center gap-4 text-2xl'>
                <a href="https://www.linkedin.com/in/shahid-yaaser-6066671b9/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/shahidyaaser" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
