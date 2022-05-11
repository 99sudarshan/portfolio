import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import One from '../images/1.jpg';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center lg:w-1/4 bg-zinc-800 relative">
            {/* img holder */}
            <div className="h-full py-8">
                <img src={One} alt="" className='rounded-full h-44 w-44 border-8 border-zinc-700 object-cover' />
                <div className='text-white text-center mt-2 font-medium text-xl [text-shadow:1px_1px_#fff]'>Simone Olivia</div>
            </div>
            <span className='md:hidden absolute flex-none top-4 left-6 text-white font-medium text-2xl bg-stone-800 py-1 px-2 rounded-lg cursor-pointer'><i className="fa-solid fa-bars" onClick={() => setIsOpen(true)}></i></span>
            {/* nav items */}
            <div className="hidden md:flex flex-col items-center py-5">
                <li className='nav_li '>
                    <NavLink to="/" activeclassname="active">Home</NavLink>
                </li>
                <li className='nav_li '>
                    <NavLink to="/about" activeclassname="active">About Me</NavLink>
                </li>
                <li className='nav_li '>
                    <NavLink to="/testimonials" activeclassname="active">Testimonials</NavLink>
                </li>
                <li className='nav_li '>
                    <NavLink to="/portfolio" activeclassname="active">Portfolio</NavLink>
                </li>
                <li className='nav_li '>
                    <NavLink to="/contact" activeclassname="active">Contact</NavLink>
                </li>
            </div>
            {/* social media */}
            <div className='flex list-none justify-center items-center pb-8 gap-5 px-4 md:gap-3 md:mt-6 lg:gap-4 lg:'>
                <li className='media-items bg-blue-700'>
                    <a href="https://facebook.com" target='_blank' className='social-media'><i className="fa-brands fa-facebook-f"></i></a>
                </li>
                <li className='media-items bg-cyan-600'>
                    <a href="https://twitter.com" target='_blank' className='social-media'><i className="fa-brands fa-twitter"></i></a>
                </li>
                <li className='media-items bg-gradient-to-tr from-yellow-400 to-pink-700'>
                    <a href="https://instagram.com" target='_blank' className='social-media'><i className="fa-brands fa-instagram"></i></a>
                </li>
                <li className='media-items bg-blue-700'>
                    <a href="https://linkedin.com" target='_blank' className='social-media'><i className="fa-brands fa-linkedin-in"></i></a>
                </li>
            </div>
            {/* mobile-nav */}
            <div className={`mobile_nav ${isOpen ? "left-0" : "-left-[100%]"} md:hidden`}>
                <div className='text-right relative right-4 top-1 text-neutral-800 text-lg cursor-pointer'>
                    <i className="fa-solid fa-xmark" onClick={() => setIsOpen(false)}></i>
                </div>
                <li className='nav_li'>
                    <NavLink to="/" activeclassname="active">Home</NavLink>
                </li>
                <li className='nav_li '>
                    <NavLink to="/about" activeclassname="active">About Me</NavLink>
                </li>
                <li className='nav_li '>
                    <NavLink to="/testimonials" activeclassname="active">Testimonials</NavLink>
                </li>
                <li className='nav_li '>
                    <NavLink to="/portfolio" activeclassname="active">Portfolio</NavLink>
                </li>
                <li className='nav_li '>
                    <NavLink to="/contact" activeclassname="active">Contact</NavLink>
                </li>
            </div>
        </div>
    )
}

export default Navigation;