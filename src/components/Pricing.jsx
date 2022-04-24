import React from 'react'
import PricingCard from './PricingCard'

import { CheckIcon } from '@heroicons/react/solid'

const Pricing = () => {
  return (
    <div name='pricing' className='w-full my-24 text-white'>
    <div className='w-full h-[700px] bg-gray-900 absolute mix-blend-overlay'></div>
        <div className='max-w-6xl px-4 py-12 mx-auto'>
            <div className='text-center py-14'>
                <h3 className='text-3xl font-bold text-gray-300 uppercase '>Pricing</h3>
                <h1 className='pt-4 pb-6 text-5xl font-bold'>The Right Price for your reasearch</h1>
                <p className='text-2xl text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Ultricies integer quis auctor elit sed vulputate. Egestas diam in arcu cursus euismod quis viverra nibh cras. </p>
            </div>

            <div className='grid gap-8 text-gray-800 md:grid-cols-2'>
                <PricingCard pack="Standard" price="3K" />
                <PricingCard pack="Enterprise" price="10K" />
            </div>

        </div>
    </div>
  )
}

export default Pricing