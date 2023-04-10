import React, { useState } from 'react';
import "./Header.css";
import { Link, NavLink } from 'react-router-dom';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Navbar from './Navbar/Navbar';

const Header = () => {
    const [open, setOpen] =useState(false);
    return (
        <div className={`container px-8 md:px-32 lg:px-48 mx-auto header flex justify-between items-center py-7 relative ${open ? 'overflow-visible' : 'overflow-hidden'}`}>
            <h1 className='text-xl md:text-3xl lg:text-3xl font-extrabold'>JobExploration</h1>
            <nav className={`flex justify-center items-center md:flex lg:flex gap-4 absolute md:static lg:static duration-300  ${open ? 'top-20  right-0 w-full bg-white text-white p-8' : "top-24 -right-56"}`}> 
                <Navbar></Navbar>
            </nav >
            <Link to={'/job'}><button className='text-white text-lg font-extrabold rounded-lg py-4 px-6 tracking-widest cursor-pointer hidden md:block lg:block'>Start Applying</button></Link>

            <div className='md:hidden lg:hidden' onClick={() => setOpen(!open)}>
                <span>{open === true ? 
                    <XMarkIcon className='h-6 w-6 text-blue-500 '></XMarkIcon> 
                    : <Bars3BottomRightIcon className='h-6 w-6 text-blue-500'></Bars3BottomRightIcon>}
                </span>
                
                
            </div>
        </div>
        
    );
};

export default Header;