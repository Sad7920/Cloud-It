import React from 'react'
import { CheckIcon } from '@heroicons/react/solid'

const PricingCard = (props) => {
    return (
            <div className='relative p-8 mt-2 duration-300 border border-indigo-400 shadow-2xl hover:scale-105 sm:mt-0 bg-indigo-50 rounded-xl shadow-indigo-200'>
                <span className='px-2 py-1 text-xs font-bold uppercase bg-indigo-200 border border-indigo-400 rounded-2xl'>{props.pack}</span>
                <div>
                    <p className='py-4 text-6xl font-bold '>&#8377;{props.price}<span className='text-3xl'>/mo</span></p>
                </div>
                <p className='pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div>
                    <p className='flex py-3 text-xl'><CheckIcon className='w-8 mx-4 text-green-400' /> Lorem, ipsum dolor.</p>
                    <p className='flex py-3 text-xl'><CheckIcon className='w-8 mx-4 text-green-400' /> Lorem, ipsum dolor, sit amet.</p>
                    <p className='flex py-3 text-xl'><CheckIcon className='w-8 mx-4 text-green-400' /> Lorem, ipsum dolor, sit.</p>
                    <p className='flex py-3 text-xl'><CheckIcon className='w-8 mx-4 text-green-400' /> Lorem, ipsum dolor, sit</p>
                    <p className='flex py-3 text-xl'><CheckIcon className='w-8 mx-4 text-green-400' /> Lorem, ipsum dolor.</p>
                    <button className='w-full px-4 py-2 mt-4'>Get Started</button>
                </div>
            </div>
    )
}

export default PricingCard