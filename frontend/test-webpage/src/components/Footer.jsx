/* eslint-disable no-unused-vars */
import React from 'react'
import { 
    FaDribbbleSquare, 
    FaFacebookSquare, 
    FaGitSquare, 
    FaInstagramSquare, 
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 
    lg:grid-cols-3 gap-8 text-gray-300'>
        <div className='max-w-[500px]'>
            <h1 className='w-full text-3xl 
            font-bold text-primary'>REACT.</h1>
            <p className='py-4'>
                Lorem ipsum dolor sit amet 
                consectetur adipisicing elit. 
                Dicta tenetur magnam soluta fugit molestias,
                doloremque unde excepturi, inventore sint expedita
                quisquam laudantium aspernatur! Doloremque, placeat.
            </p>
            <div className='flex justify-left md:w-[75%] my-6 '>
                <FaFacebookSquare size={30} className=' hover:scale-105 duration-300 hover:text-primary' />
                <FaInstagramSquare size={30} className='ml-5 hover:scale-105 duration-300 hover:text-primary' />
                <FaTwitterSquare size={30} className='ml-5 hover:scale-105 duration-300 hover:text-primary' />
                <FaGitSquare size={30} className='ml-5 hover:scale-105 duration-300 hover:text-primary' />
                <FaDribbbleSquare size={30} className='ml-5 hover:scale-105 duration-300 hover:text-primary' />
            </div>
        </div>

        <div className='lg:col-span-2 flex justify-between max-w-[500px]'>
            <div>
                <h6 className='font-bold text-white mb-3'>Solution</h6>
                <ul>
                    <li className='py-1 text-sm cursor-pointer hover:text-primary'>Analytics</li>
                    <li className='py-1 text-sm cursor-pointer hover:text-primary'>Marketing</li>
                    <li className='py-1 text-sm cursor-pointer hover:text-primary'>Commerce</li>
                    <li className='py-1 text-sm cursor-pointer hover:text-primary'>Insights</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold text-white mb-3'>Support</h6>
                <ul>
                    <li className='py-1 text-sm cursor-pointer hover:text-primary'>Pricing</li>
                    <li className='py-1 text-sm cursor-pointer hover:text-primary'>Documentation</li>
                    <li className='py-1 text-sm cursor-pointer hover:text-primary'>Guids</li>
                    <li className='py-1 text-sm cursor-pointer hover:text-primary'>API Status</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold text-white mb-3'>Company</h6>
                <ul>
                    <li className='py-1 text-sm cursor-pointer hover:text-primary'>About</li>
                    <li className='py-1 text-sm cursor-pointer hover:text-primary'>Blog</li>
                    <li className='py-1 text-sm cursor-pointer hover:text-primary'>Jobs</li>
                    <li className='py-1 text-sm cursor-pointer hover:text-primary'>Press</li>
                    <li className='py-1 text-sm cursor-pointer hover:text-primary'>Careers</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold text-white mb-3'>Legal</h6>
                <ul>
                    <li className='py-1 text-sm cursor-pointer hover:text-primary'>Claim</li>
                    <li className='py-1 text-sm cursor-pointer hover:text-primary'>Policy</li>
                    <li className='py-1 text-sm cursor-pointer hover:text-primary'>Terms</li>
                </ul>
            </div>


        </div>
        
        <div className='flex mx-auto margin-center'>
            <p className=''>
                    Made with <span className='text-red-500 hover:text-primary text-1xl'>♥</span> by Sky
            </p>
        </div>
            

    </div>
    
  )
}

export default Footer