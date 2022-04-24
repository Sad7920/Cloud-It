import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'
import Notification from './Notification'

const AllInOne = () => {
  return (
    <div name='platforms' className='w-full my-32'>
        <div className='max-w-6xl px-4 mx-auto'>
            <h2 className='text-5xl font-bold text-center text-gray-800 '>All-In-One Platform</h2>
            <p className='py-8 text-2xl text-center text-gray-600 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className='grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-4'>
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
                    <Notification />
            </div>
        </div>
    </div>
  )
}

export default AllInOne