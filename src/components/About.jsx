import React from 'react'
import AboutCard from './AboutCard'

const About = () => {
  return (
    <div name='about' className='w-full my-56 lg:my-32'>
        <div className='max-w-6xl px-4 mx-auto'>
            <div className='text-center'>
                <h1 className='my-3 text-5xl font-bold text-gray-800'>Trusted by Developers across the World.</h1>
                <p className='mb-3 text-2xl text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel orci porta non pulvinar neque. Nisl vel pretium lectus quam id leo.</p>
            </div>
            <div className='grid gap-4 py-3 text-center sm:grid-cols-3'>
                <AboutCard head="100%" tag="Completion" />
                <AboutCard head="24/7" tag="Delivery" />
                <AboutCard head="100K" tag="Transaction" />
            </div>
        </div>
    </div>
  )
}

export default About