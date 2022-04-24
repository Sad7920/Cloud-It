import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid';
import Cyber from '../assets/cyber-bg.png';

const Intro = () => {
  return (
    <div name='home' className='flex flex-col justify-between w-full h-screen bg-slate-100'>
        <div className='grid max-w-6xl m-auto lg:grid-cols-2'>
            <div className='flex flex-col justify-center w-full px-4 py-8 text-center lg:text-left'>
                <p className='px-1 text-lg font-semibold md:text-xl'>Unique Sequencing & Production</p>
                <h1 className='py-2 text-5xl font-bold text-gray-800 md:text-6xl'>Cloud Management</h1>
                <p className='px-1 text-lg font-semibold'>This is our Tech brand.</p>
                <button className='px-4 py-2 my-6 '>Get Started!</button>
            </div>
            <div className='grid place-items-center'>
                <img src={Cyber} className=' w-[30rem] lg:w-full' />
            </div>
            <div className='absolute hover:scale-105 duration-300 flex flex-col py-4 px-4 lg:min-w-[760px] bottom-[-10%] md:bottom-[-10%] lg:bottom-[-8%] mx-1 lg:left-1/2 transform lg:-translate-x-1/2 bg-indigo-50 border rounded-xl border-indigo-400 shadow-indigo-100 text-center shadow-xl' >
                <p className='mb-2 text-xl text-gray-800 md:text-2xl'>Data Services</p>
                <div className='flex flex-col justify-between sm:flex-row '>
                    <p className='flex px-4 py-2 text-sm md:text-lg text-slate-500'><ServerIcon className='w-5 mr-2 text-indigo-500 md:w-6' />App Security</p>
                    <p className='flex px-4 py-2 text-sm md:text-lg text-slate-500'><PaperAirplaneIcon className='w-5 mr-2 text-indigo-500 md:w-6' />Dashboard Design</p>
                    <p className='flex px-4 py-2 text-sm md:text-lg text-slate-500'><CloudUploadIcon className='w-5 mr-2 text-indigo-500 md:w-6' />Cloud Data</p>
                    <p className='flex px-4 py-2 text-sm md:text-lg text-slate-500'><DatabaseIcon className='w-5 mr-2 text-indigo-500 md:w-6' />API</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro