import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import signUpLottie from '../../assets/Lottie/signUp.json'
import Lottie from 'lottie-react';

const SignUpPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const data = { name, email, photo, password }
        console.log(data);
    }
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md  w-96 md:min-w-xl border border-gray-200">
                <h2 className="text-xl md:text-3xl font-bold text-center mb-6">Sign Up</h2>
                {/* Sign Up form */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block pb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full p-2 border rounded-md"
                            placeholder='enter your name'
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block pb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-2 border rounded-md"
                            placeholder='enter your email'
                            required />
                    </div>
                    <div className="mb-4">
                        <label className="block pb-2">Photo URL</label>
                        <input
                            type="url"
                            name="photo"
                            className="w-full p-2 border rounded-md"
                            placeholder='enter your photo URL'
                            required />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block pb-2">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="w-full p-2 border rounded-md"
                            placeholder='enter a password'
                            required />
                        <button onClick={() => setShowPassword(!showPassword)} className='absolute right-4 top-11'> {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mb-3">Sign Up
                    </button>

                    <button className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mb-3'>Continue with Google</button>

                    <p className='text-center'>Already have an account? <Link className='text-blue-700 underline' to="/sign-in">Sign-in</Link></p>
                </form>
            </div>
            <Lottie animationData={signUpLottie}></Lottie>
        </div>
    );
};

export default SignUpPage;