import React from 'react';
import { FiSearch } from "react-icons/fi";

const NavbarComponent = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    
                    {/* Website Title & Search Bar */}
                    <div className="flex items-center space-x-4">
                        <h1 className="text-2xl font-bold text-gray-800">GadgetSwap</h1>
                        <div className="relative w-60">
                            <input
                                type="text"
                                placeholder="Search gadgets..."
                                className="input input-bordered w-full border-2 border-gray-300 focus:border-blue-500 pl-10 rounded-xl"
                            />
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
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
        </nav>
    );
};

export default NavbarComponent;
