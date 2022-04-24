import React from 'react'

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'

import SupportImg from '../assets/support.jpeg'

const Support = () => {
    return (
        <div name='support' className='w-full mt-24 '>
            <div className='w-full h-[700px] bg-gray-900/90 absolute'>
                <img className='object-cover w-full h-full mix-blend-overlay' src={SupportImg} alt="Support" />
            </div>

            <div className='relative max-w-6xl mx-auto text-white '>
                <div className='px-4 py-12 text-center'>
                    <h1 className='pt-8 text-3xl text-gray-300'>SUPPORT</h1>
                    <h1 className='py-4 text-5xl font-bold'>Finding the right team</h1>
                    <p className='py-4 text-2xl text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Donec massa sapien faucibus et. Vulputate ut pharetra sit amet. Tempor commodo ullamcorper a lacus vestibulum sed arcu non odio. Donec massa sapien faucibus et. Vulputate ut pharetra sit amet.</p>
                </div>

                <div className='grid px-4 pt-12 text-black sm:pt-20 lg:grid-cols-3 gap-x-8 gap-y-16'>
                    <div className='duration-300 border border-indigo-400 shadow-2xl bg-indigo-50 shadow-indigo-200 rounded-xl hover:scale-105'>
                        <div className='p-8'>
                            <PhoneIcon className='w-16 p-3 text-white bg-indigo-600 rounded-xl mt-[-4rem]' />
                            <h3 className='py-4 text-2xl font-bold text-gray-700'>Sales</h3>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className='bg-indigo-100 cursor-pointer rounded-b-xl'>
                            <p className='flex px-6 py-2 text-indigo-700'>Contact Us <ArrowSmRightIcon className='w-6' /></p>
                        </div>
                    </div>
                    
                    <div className='duration-300 border border-indigo-400 shadow-2xl bg-indigo-50 shadow-indigo-200 rounded-xl hover:scale-105'>
                        <div className='p-8'>
                            <SupportIcon className='w-16 p-3 text-white bg-indigo-600 rounded-xl mt-[-4rem]' />
                            <h3 className='py-4 text-2xl font-bold text-gray-700'>Technical Support</h3>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className='bg-indigo-100 cursor-pointer rounded-b-xl'>
                            <p className='flex px-6 py-2 text-indigo-700'>Contact Us <ArrowSmRightIcon className='w-6' /></p>
                        </div>
                    </div>

                    <div className='duration-300 border border-indigo-400 shadow-2xl bg-indigo-50 shadow-indigo-200 rounded-xl hover:scale-105'>
                        <div className='p-8'>
                            <ChipIcon className='w-16 p-3 text-white bg-indigo-600 rounded-xl mt-[-4rem]' />
                            <h3 className='py-4 text-2xl font-bold text-gray-700'>Media Inquiries</h3>
                            <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className='bg-indigo-100 cursor-pointer rounded-b-xl'>
                            <p className='flex px-6 py-2 text-indigo-700'>Contact Us <ArrowSmRightIcon className='w-6' /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support