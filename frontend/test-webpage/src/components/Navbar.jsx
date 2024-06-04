/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => setNav(!nav);

    const handleClickScroll = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        
        <div className='flex justify-between items-center h-24 max-w-[1240px] m-auto px-4 text-white'>
            {/* PC */}
            <h1 className='w-full text-3xl font-bold text-primary'><span className='hover:text-white hover:cursor-pointer'>DATA</span></h1>
            <ul className='hidden md:flex uppercase'>
                <li
                    className='p-4 cursor-pointer text-primary font-bold'
                    onClick={() => handleClickScroll('section-1')}
                >
                    Home
                </li>

                <li
                    className='p-4 cursor-pointer hover:text-primary font-bold'
                    onClick={() => handleClickScroll('section-2')}
                >
                    Analytics
                </li>

                <li
                    className='p-4 cursor-pointer hover:text-primary font-bold'
                    onClick={() => handleClickScroll('section-3')}
                >
                    Newsletter
                </li>

                <li
                    className='p-4 cursor-pointer hover:text-primary font-bold'
                    onClick={() => handleClickScroll('section-4')}
                >
                    Pricing
                </li>

                

                {/* Add more sections as needed */}
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={35} /> : <AiOutlineMenu size={35} />}
            </div>

            {/* mobile */}
            <div
                className={
                    nav
                        ? `fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500`
                        : `ease-out-in duration-500 fixed left-[-100%]`
                }
            >
                <h1 className='w-full text-3xl font-bold text-primary ml-5'>DATA</h1>
                <ul className='pt-4 uppercase'>
                    <li
                        className='p-4 border-b border-gray-600 cursor-pointer hover:text-primary font-bold'
                        onClick={() => {
                            handleNav();
                            handleClickScroll('section-1');
                        }}
                    >
                        Home
                    </li>

                    <li
                        className='p-4 border-b border-gray-600 cursor-pointer hover:text-primary font-bold'
                        onClick={() => {
                            handleNav();
                            handleClickScroll('section-2');
                        }}
                    >
                        Analytics
                    </li>

                    <li
                        className='p-4 border-b border-gray-600 cursor-pointer hover:text-primary font-bold'
                        onClick={() => {
                            handleNav();
                            handleClickScroll('section-3');
                        }}
                    >
                        Newsletter
                    </li>

                    <li
                        className='p-4 border-b border-gray-600 cursor-pointer hover:text-primary font-bold'
                        onClick={() => {
                            handleNav();
                            handleClickScroll('section-4');
                        }}
                    >
                        Pricing
                    </li>
                
                    {/* Add more sections as needed */}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
