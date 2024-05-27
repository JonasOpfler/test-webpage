/* eslint-disable no-unused-vars */
import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'


const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white' id="section-4">
        <div className='max-w-[1240px] mx-auto 
        grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl border shadow-slate-600 flex flex-col p-4
            my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={Single} alt='single'
                className='w-20 mx-auto bg-transparent pt-5' />
                <h2 className='text-2xl font-bold text-center 
                py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'><span className='text-green-500'>$</span>149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>50 Gb Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-primary w-[200px] rounded-md 
                font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-500'>
                Buy now
                </button>
            </div>

            <div className='w-full bg-primary shadow-xl shadow-slate-600 flex flex-col p-4
            my-8 md:my-0 rounded-lg hover:scale-105 duration-300'>
                <img src={Double} alt='double'
                className='w-20 mx-auto bg-transparent pt-5' />
                <h2 className='text-2xl font-bold text-center 
                py-8'>Partnership <br />
                <span className='text-white text-xl'>best price</span></h2>
                <p className='text-center text-4xl font-bold'><span className='text-green-500'>$</span>249</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>100 Gb Storage</p>
                    <p className='py-2 border-b mx-8'>2 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 4 GB</p>
                </div>
                <button className='text-primary w-[200px] rounded-md 
                font-medium my-6 mx-auto py-3 bg-white hover:scale-105 duration-500'>
                Buy now
                </button>
            </div>

            <div className='w-full shadow-xl border shadow-slate-600 flex flex-col p-4
            my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={Triple} alt='triple'
                className='w-20 mx-auto bg-transparent pt-5' />
                <h2 className='text-2xl font-bold text-center 
                py-8'>Group Account <br />
                <span className='text-primary text-xl'>most popular</span></h2>
                <p className='text-center text-4xl font-bold'><span className='text-green-500'>$</span>459</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>300 Gb Storage</p>
                    <p className='py-2 border-b mx-8'>3 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
                </div>
                <button className='bg-primary w-[200px] rounded-md 
                font-medium my-6 mx-auto py-3 text-black hover:scale-105 duration-500'>
                Buy now
                </button>
            </div>

        </div>

    </div>
  )
}

export default Cards