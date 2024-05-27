/* eslint-disable no-unused-vars */
import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4' id="section-2">
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt='laptop'
            className='w-[500px] mx-auto py-4'/>
            <div className='flex flex-col justify-center'>
                <p className='text-primary uppercase font-bold
                '>data analytics dashbord</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold
                py-2'> Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor, sit amet consectetur 
                    adipisicing elit. Facere, sequi. 
                    Explicabo laboriosam corporis quis, 
                    ex atque cupiditate mollitia quos 
                    enim perspiciatis libero sed illum, 
                    numquam modi qui asperiores. 
                    Quas, voluptates?
                </p>
                <button className='text-white bg-primary w-[200px] rounded-md 
                font-medium my-6 mx-auto py-3 md:mx-0 bg-black hover:scale-105 duration-500'>
                Get Starded
                </button>
            </div>

        </div>
    </div>
  )
}

export default Analytics