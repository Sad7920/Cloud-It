import React from 'react'

const AboutCard = (props) => {
    return (
        <div className='py-10 my-2 duration-300 border border-indigo-400 shadow-xl hover:scale-105 rounded-xl bg-indigo-50 shadow-indigo-100'>
            <h1 className='my-1 text-5xl font-bold text-indigo-600 md:text-6xl'>{props.head}</h1>
            <p className='text-xl text-gray-600'>{props.tag}</p>
        </div>
    )
}

export default AboutCard