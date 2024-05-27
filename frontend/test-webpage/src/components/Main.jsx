/* eslint-disable no-unused-vars */
import React from 'react';
import { ReactTyped } from "react-typed";

const Main = () => {
  return (
    <div className='text-white' id="section-1">
        <div className='max-w-[800px] mt-[-96px] w-full 
        h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-primary font-bold p-2
            md:text-3xl sm:text-2xl 
            text-xl uppercase'>growing with data analytics</p>
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
                BTB, BTC, & SASS platforms.
            </p>
            <button className='bg-primary w-[200px] rounded-md 
            font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-500'>
              Get Starded</button>

        </div>
    </div>
  )
}

export default Main