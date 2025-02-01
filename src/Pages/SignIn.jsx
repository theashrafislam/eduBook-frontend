import { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';

const SignIn = () => {
  const { signInEmailPassword } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginInfo = {
      email,
      password
    };
    signInEmailPassword(email, password)
      .then(() => {
        navigate('/');
        toast.success('Login successful!" 🚀');
      })
      .catch(error => {
        toast.error(error.message)
      })
  };

  const handleGoogleLogin = () => {
    console.log('Logging in with Google');
    // Implement Google authentication here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">Sign in to your account</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your email"
              required
              name='email'
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              className="mt-1 w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
              placeholder="Enter your password"
              required
              name='password'
            />
            <p className="text-blue-500 hover:underline text-end cursor-pointer">
              Forgot password?
            </p>
          </div>
          <button
            type="submit"
            className="w-full btn btn-success rounded-mdp-2 text-white"
          >
            Login
          </button>
        </form>
        <div className="my-4 flex items-center justify-center">
          <hr className="w-full border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="w-full border-gray-300" />
        </div>
        <button
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-2 rounded-md p-2 border-2 border-gray-400 mb-3"
        >
          <FcGoogle className='text-2xl' /> Login with Google
        </button>
        <button
          onClick={handleGoogleLogin}
          className="flex w-full items-center justify-center gap-2 rounded-md p-2 border-2 border-gray-400"
        >
          <FaGithub className='text-2xl' color='none' /> Login with Google
        </button>
        <div>
          <p className='py-2 text-center'>Don't have an account? <Link to="/sign-up" className='text-blue-500 hover:underline text-end cursor-pointer'>Sign up here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;