import React from 'react';
import logo from '../assets/logo.jpg'

const Navbar = ({availableBalance}) => {
    return (
        <div className='py-3 shadow-xl' id='header'>
            <div className="navbar w-[90%] mx-auto">
                <div className="logo flex-1">
                    <img src={logo} alt="" className='w-[70px]' />
                </div>
                <div className="flex items-center border border-gray-200 rounded-xl p-3 cursor-pointer">
                    <p className='text-xl font-bold mr-1'>${availableBalance}</p>
                    <span className='text-xl font-bold'>✨</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;