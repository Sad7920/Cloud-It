import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

const Notification = () => {
    return (
        <div>
            <div className='flex'>
                <div>
                    <CheckIcon className='w-8 text-green-500 border rounded-lg' />
                </div>
                <div className='pl-4'>
                    <h3 className='text-lg font-bold text-gray-800'>Notification</h3>
                    <p className='pt-2 pb-4 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}

export default Notification