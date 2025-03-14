import React, { useState } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';

const NavbarComponent = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling dropdown menu on small screens

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-800 to-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    {/* Website Title & Search Bar */}
                    <div className="flex items-center space-x-4">
                        <h1 className="text-2xl font-bold text-white">GadgetSwap</h1>
                        <div className="relative w-60 mx-3">
                            <input
                                type="text"
                                placeholder="Search gadgets..."
                                className="input input-bordered w-full border-1 border-gray-200 focus:border-blue-500 pl-10 rounded-xl text-white placeholder-gray-300"
                            />
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" />
                        </div>



                    </div>

                    {/* Hamburger Menu Icon (Dropdown for Mobile) */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <FiX className='text-white' size={24} /> : <FiMenu className='text-white' size={24} />}
                        </button>
                    </div>

                    {/* Navigation Links (Desktop) */}
                    <ul className="hidden md:flex space-x-6 text-white font-medium">
                        <li><a href="#" className="hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="hover:text-blue-500">Browse</a></li>
                        <li><a href="#" className="hover:text-blue-500">Categories</a></li>
                        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                    </ul>

                    {/* Buttons */}
                    <div className="flex items-center space-x-2">
                        <button className="btn btn-outline bg-blue-300 px-4 py-2 rounded-xl">Sign Up</button>
                        <span className="text-gray-500">or</span>
                        <button className="btn btn-primary bg-emerald-300 px-4 py-2 rounded-xl">Sign In</button>
                    </div>

                </div>
            </div>

            {/* Dropdown Menu for Small Devices */}
            <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="absolute left-0 right-0 bg-white shadow-md z-10 py-4 px-6">
                    <ul className="space-y-4 text-gray-700 font-medium">
                        <li><a href="#" className="hover:text-blue-500">Home</a></li>
                        <li><a href="#" className="hover:text-blue-500">Browse</a></li>
                        <li><a href="#" className="hover:text-blue-500">Categories</a></li>
                        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                    </ul>
                </div>
            </div>

        </nav>
    );
};

export default NavbarComponent;
