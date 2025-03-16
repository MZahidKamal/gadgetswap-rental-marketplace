import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import footerLogo from '../../assets/Icons/Footer logo.png'

const FooterComponent = () => {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left md:text-left">
                    {/* Website Name/Logo */}
                    <div>
                        <img className='w-16 h-16' src={footerLogo} alt="" />
                        <h2 className="text-2xl font-bold text-blue-500 mt-2">GadgetSwap</h2>
                        <p className="mt-2 text-gray-400">Your trusted gadget rental marketplace.</p>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-lg font-semibold">Useful Links</h3>
                        <ul className="mt-3 space-y-2">
                            <li><a href="#" className="text-gray-400 hover:underline hover:text-blue-400">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:underline hover:text-blue-400">About</a></li>
                            <li><a href="#" className="text-gray-400 hover:underline hover:text-blue-400">Contact</a></li>
                            <li><a href="#" className="text-gray-400 hover:underline hover:text-blue-400">Support</a></li>
                        </ul>
                    </div>

                    {/* Terms & condition */}
                    <div>
                        <h3 className="text-lg font-semibold">Terms & Condition</h3>
                        <ul className="mt-3 space-y-2">
                            <li><a href="#" className="text-gray-400 hover:underline hover:text-blue-400">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:underline hover:text-blue-400">Terms of Use</a></li>
                            <li><a href="#" className="text-gray-400 hover:underline hover:text-blue-400">Refund Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:underline hover:text-blue-400">Cookie Policy</a></li>
                        </ul>
                    </div>
                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-lg font-semibold">Follow Us</h3>
                        <div className="flex justify-center text-xl md:justify-start mt-3 space-x-4">
                            <a href="#" className="text-blue-600"><FaFacebook></FaFacebook></a>
                            <a href="#" className="text-blue-600"><FaTwitter></FaTwitter></a>
                            <a href="#" className="text-blue-600"><FaLinkedin></FaLinkedin></a>
                            <a href="#" className="text-pink-400"><FaInstagram></FaInstagram></a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-gray-400 mt-2">Copyright © {new Date().getFullYear()} GadgetSwap. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
