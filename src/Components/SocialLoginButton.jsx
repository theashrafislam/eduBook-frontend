import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const SocialLoginButton = () => {
    const { signInUseingGoogle, sginInUsingGithub } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || "/";

    const handleSocialLogin = async (provider) => {
        if (provider === 'google') {
            await signInUseingGoogle()
                .then(async res => {
                    const userInfo = {
                        name: res?.user?.displayName,
                        email: res?.user?.email
                    }
                    const result = await axios.post(`https://edu-book-server.vercel.app/user-register`, userInfo);
                    // console.log(result);
                    if (result.status === 200) {
                        navigate(from);
                        toast.success("Login Successfully.")
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        } else if (provider === 'github') {
            await sginInUsingGithub()
                .then(async res => {
                    const userInfo = {
                        name: res?.user?.displayName,
                        email: res?.user?.email
                    }
                    const result = await axios.post(`https://edu-book-server.vercel.app/user-register`, userInfo);
                    // console.log(result);
                    if (result.status === 200) {
                        navigate(from);
                        toast.success("Login Successfully.")
                    }
                })
                .catch(error => {
                    console.log(error);
                })
        }


        // try {
        //     
        // } catch (error) {
        //     toast.error(error.message || "Login failed!");
        // }
    };

    return (
        <div>
            <button
                onClick={() => handleSocialLogin('google')}
                className="flex w-full items-center justify-center gap-2 rounded-md p-2 border-2 border-gray-400 mb-3"
            >
                <FcGoogle className='text-2xl' /> Login with Google
            </button>
            <button
                onClick={() => handleSocialLogin('github')}
                className="flex w-full items-center justify-center gap-2 rounded-md p-2 border-2 border-gray-400"
            >
                <FaGithub className='text-2xl' /> Login with GitHub
            </button>
        </div>
    );
};

export default SocialLoginButton;