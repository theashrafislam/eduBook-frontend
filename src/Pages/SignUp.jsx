import { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import axios from 'axios';

const SignUp = () => {
    const navigate = useNavigate();
    const { createUserEmailPassword, userSignOut, updateProfileInformation } = useAuth();

    const handleSignUpForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const passwrod = form.password.value;
        if(passwrod.length < 6){
            return toast.error("Password must be at least 6 characters long.")
        }
        const userInfo = {
            name,
            email,
            passwrod
        }
        createUserEmailPassword(email, passwrod)
            .then(() => {
                updateProfileInformation(name)
                    .then((result) => {
                        userSignOut()
                            .then( async () => {
                                const result = await axios.post(`http://localhost:3000/user-register`, userInfo);
                                if(result?.status === 200){
                                    navigate('/sign-in');
                                    e.target.reset();
                                    toast.success(result?.data?.message);
                                }
                            })
                            .catch(error => {
                                toast.error(error.message)
                            })
                    })
                    .catch(error => {
                        toast.error(error.message)
                    })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">Create an account</h2>
                <form className="space-y-4" onSubmit={handleSignUpForm}>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Full Name</label>
                        <input
                            type="text"
                            name='name'
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-600">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full btn btn-success rounded-md p-2 text-white"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="my-4 flex items-center justify-center">
                    <hr className="w-full border-gray-300" />
                    <span className="mx-2 text-gray-500">or</span>
                    <hr className="w-full border-gray-300" />
                </div>
                <button
                    className="flex w-full items-center justify-center gap-2 rounded-md p-2 border-2 border-gray-400 mb-3"
                >
                    <FcGoogle className='text-2xl' /> Sign up with Google
                </button>
                <button
                    className="flex w-full items-center justify-center gap-2 rounded-md p-2 border-2 border-gray-400"
                >
                    <FaGithub className='text-2xl' /> Sign up with GitHub
                </button>
                <div>
                    <p className='py-2 text-center'>Already have an account? <Link to="/sign-in" className='text-blue-500 hover:underline text-end cursor-pointer'>Sign in here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;