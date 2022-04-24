import React from 'react'
import FooterBlock from './FooterBlock';

import {FaFacebook, FaTwitter, FaInstagram, FaGithub, FaTwitch} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full px-4 py-8 mt-24 text-gray-300 bg-gray-900'>
        <div className='grid max-w-6xl grid-cols-2 gap-4 py-8 mx-auto border-b-2 border-gray-600 md:grid-cols-6'>
            <FooterBlock head="Solutions" li1="Marketing" li2="Analytics" li3="Commerce" li4="Data" li5="Cloud" />
            <FooterBlock head="Support" li1="Pricing" li2="Documentation" li3="Guides" li4="Api Status" />
            <FooterBlock head="Company" li1="About" li2="Blog" li3="Jobs" li4="Press" li5="Partners" />
            <FooterBlock head="Legal" li1="Claims" li2="Privacy" li3="Terms" li4="Policies" li5="Conditions" />
            <div className='col-span-2 pt-8 md:pt-0'>
                <h1 className='text-xl font-bold text-gray-200 uppercase'>subscribe to our newsletter</h1>
                <p className='pt-2 pb-4 text-gray-400'>The latest News, Articles and Resources sent to your inbox weekly.</p>
                <div className='flex'>
                    <input type="email" placeholder='Enter your Email' className='w-full px-2 text-black rounded-md '></input>
                    <button className='px-2 py-2 ml-2 active:bg-indigo-300 hover:bg-indigo-200'>Subscribe!</button>
                </div>
            </div>
        </div>
        <div className='grid justify-between max-w-6xl py-4 mx-auto text-indigo-500 sm:flex'>
            <div>
                <p>2022 Cloud It, LLC. All rights reserved</p>
            </div>
            <div className='flex my-4 sm:my-0'>
                <FaFacebook className='mx-2 cursor-pointer hover:text-indigo-600' size={30} />
                <FaTwitter className='mx-2 cursor-pointer hover:text-indigo-600' size={30} />   
                <FaInstagram className='mx-2 cursor-pointer hover:text-indigo-600' size={30} />
                <FaGithub className='mx-2 cursor-pointer hover:text-indigo-600' size={30} />
                <FaTwitch className='mx-2 cursor-pointer hover:text-indigo-600' size={30} />
            </div>
        </div>
    </div>
  )
}

export default Footer