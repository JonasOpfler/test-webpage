/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { ReactTyped } from "react-typed";
import { 
  FaDribbbleSquare, 
  FaFacebookSquare, 
  FaGitSquare, 
  FaInstagramSquare, 
  FaTwitterSquare,
} from 'react-icons/fa'
import { CgChevronDoubleDown } from "react-icons/cg";

const Main = () => {
  const [nav, setNav] = useState(false);

    const handleNav = () => setNav(!nav);

    const handleClickScroll = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
  return (
    
    <div className='text-white' id="section-1">
        <div className='max-w-[800px] mt-[-96px] w-full 
        h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-white font-bold p-2
            md:text-3xl sm:text-2xl 
            text-xl uppercase'>growing with <span className='text-primary'>Us</span>.</p>
            <h1 className='md:text-7xl sm:text-6xl 
            text-4xl font-bold md:py-6'>Grow with <span className='text-primary'>DATA</span>.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl 
                text-xl font-bold py-4 '>Fast, flexible, fanancing for</p>
                <ReactTyped strings={['BTB', 'BTC', 'SASS']} 
                typeSpeed={120}  backSpeed={140} loop className='md:text-5xl sm:text-4xl 
                text-xl font-bold md:pl-4 pl-2'/>
            </div>
            <p className='md:text-2xl text-xl font-normal text-gray-400'>Monitor your data analytics to increase revenue for
            <span className='text-primary'> BTB</span>, <span className='text-primary'>BTC</span>, & <span className='text-primary'>SASS</span> platforms.
            </p>
            <button className='bg-primary w-[200px] rounded-md 
            font-medium my-6 mx-auto py-3 text-white hover:scale-105 duration-500'>
              Get Starded</button>

              <div className='flex justify-center my-6 '>
                <FaFacebookSquare size={40} className=' hover:scale-105 duration-200 hover:text-primary' />
                <FaInstagramSquare size={40} className='ml-5 hover:scale-105 duration-200 hover:text-primary' />
                <FaTwitterSquare size={40} className='ml-5 hover:scale-105 duration-200 hover:text-primary' />
                <FaGitSquare size={40} className='ml-5 hover:scale-105 duration-200 hover:text-primary' />
                <FaDribbbleSquare size={40} className='ml-5 hover:scale-105 duration-200 hover:text-primary' />
            </div>
            <div className='flex justify-center my-6 '>
              <CgChevronDoubleDown size={60} className='hover:movedown-15 duration-300 hover:text-primary'
              onClick={() => {
                handleNav();
                handleClickScroll('section-2');
            }}/>
            </div>
        </div>
        
    </div>
  )
}

export default Main