import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';

const SignInPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const data = { email, password }
        console.log(data);
    }
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white p-8 rounded-md shadow-lg w-96 md:min-w-xl border border-gray-200">
                <h2 className="text-xl md:text-3xl font-bold text-center mb-6">Sign In</h2>
                {/* Sign In form */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block pb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-2 border rounded-md"
                            placeholder='email'
                            required />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block pb-2">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="w-full p-2 border rounded-md"
                            placeholder='password'
                            required />
                            <button onClick={() => setShowPassword(!showPassword)} className='absolute right-4 top-11'> {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>} </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mb-3">Sign In
                    </button>

                    <button className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300 mb-3'>Continue with Google</button>

                    <p className='text-center'>New here? <Link className='text-red-600 underline' to="/sign-up">sign-up</Link></p>
                </form>
            </div>
        </div>
    );
};

export default SignInPage;
