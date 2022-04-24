import React, {useState} from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, animateScroll as scroll} from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    return (
        <div className='fixed z-10 w-screen h-16 text-black bg-indigo-50 drop-shadow-lg'>
            <div className='flex items-center justify-between w-full h-full max-w-6xl px-2 mx-auto'>
                <div className='flex items-center'>
                    <h1 className='mr-4 text-3xl font-bold text-gray-800 sm:text-4xl lg:mr-20 '>Cloud It.</h1>
                    <ul className='hidden md:flex'>
                        <li className='px-3 py-1 cursor-pointer hover:underline decoration-2 decoration-indigo-700'>
                            <Link to="home" smooth={true} offset={0} duration={500}>Home</Link>
                        </li>
                        <li className='px-3 py-1 cursor-pointer hover:underline decoration-2 decoration-indigo-700'>
                            <Link to="about" smooth={true} offset={-140} duration={500}>About</Link>
                        </li>
                        <li className='px-3 py-1 cursor-pointer hover:underline decoration-2 decoration-indigo-700'>
                            <Link to="support" smooth={true} offset={0} duration={500}>Support</Link>
                        </li>
                        <li className='px-3 py-1 cursor-pointer hover:underline decoration-2 decoration-indigo-700'>
                            <Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link>
                        </li>
                        <li className='px-3 py-1 cursor-pointer hover:underline decoration-2 decoration-indigo-700'>
                            <Link to="pricing" smooth={true} offset={10} duration={500}>Pricing</Link>
                        </li>
                    </ul>
                </div>
                <div className='hidden md:flex'>
                    <button className='px-4 py-2 mx-2 text-indigo-900 bg-transparent shadow-md hover:bg-indigo-300 active:bg-indigo-400 shadow-indigo-300'>Sign In</button>
                    <button className='px-4 py-2 mx-2'>Sign Up</button>
                </div>
                <div className='md:hidden' onClick={() => {setNav(!nav)}} >
                    {!nav ? <MenuIcon className='cursor-pointer w-9' /> : <XIcon className='cursor-pointer w-9' />}
                </div>
            </div>
            <ul className={!nav ? 'hidden' : 'absolute w-full px-8 text-gray-800 bg-indigo-100'}>
                <li className='px-6 py-4 cursor-pointer hover:bg-indigo-200'>
                    <Link  onClick={() => {setNav(!nav)}} to="home" smooth={true} offset={0} duration={500}>Home</Link>
                </li>
                <li className='px-6 py-4 border-indigo-200 cursor-pointer hover:bg-indigo-200 border-y-2'>
                    <Link onClick={() => {setNav(!nav)}} to="about" smooth={true} offset={-140} duration={500}>About</Link>
                </li>
                <li className='px-6 py-4 cursor-pointer hover:bg-indigo-200'>
                    <Link onClick={() => {setNav(!nav)}} to="support" smooth={true} offset={0} duration={500}>Support</Link>
                </li>
                <li className='px-6 py-4 border-indigo-200 cursor-pointer hover:bg-indigo-200 border-y-2'>
                    <Link onClick={() => {setNav(!nav)}} to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link>
                </li>
                <li className='px-6 py-4 cursor-pointer hover:bg-indigo-200'>
                    <Link onClick={() => {setNav(!nav)}} to="pricing" smooth={true} offset={10} duration={500}>Pricing</Link>
                </li>
                <div className='flex flex-col'>
                    <button className='px-4 py-2 m-2 text-indigo-500 bg-transparent shadow-md hover:bg-indigo-300 active:bg-indigo-400 shadow-indigo-300'>Sign In</button>
                    <button className='px-4 py-2 m-2 '>Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar