import React, { useRef, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';

const ForgotPassword = () => {
    const emailRef = useRef(null);
    const { sendResetPasswordEmail } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleResetPassword = () => {
        const email = emailRef.current.value.trim();
        if (!email) {
            toast.error('Please enter a valid email address.');
            return;
        }

        sendResetPasswordEmail(email)
            .then(() => {
                toast.success('Password reset email sent successfully.');
                setIsModalOpen(false);
            })
            .catch(error => {
                toast.error(error.message || 'Failed to send reset email.');
            });
    };

    return (
        <div className="flex justify-end">
            {/* Forgot Password Button */}
            <button onClick={() => setIsModalOpen(true)}>
                <p className="text-blue-500 hover:underline cursor-pointer">
                    Forgot password?
                </p>
            </button>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 className="font-bold text-lg">Forgot Password?</h3>
                        <p className="py-4">Enter your email to reset your password.</p>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                ref={emailRef}
                            />
                        </div>

                        {/* Modal Actions */}
                        <div className="flex justify-end mt-4">
                            <button className="btn mr-2" onClick={() => setIsModalOpen(false)}>
                                Close
                            </button>
                            <button className="btn btn-primary" onClick={handleResetPassword}>
                                Reset Password
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* React Hot Toast Container */}
            <Toaster
                position="top-center"
                toastOptions={{
                    style: {
                        zIndex: 9999,
                    },
                }}
            />
        </div>
    );
};

export default ForgotPassword;