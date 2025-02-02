import axios from 'axios';
import React, { useRef, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const AdmissionBook = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { user } = useAuth();
    const {id} = useParams();
    // console.log(id);
    // console.log(user);

    const [image, setImage] = useState(null);
    // const [imageUrl, setImageUrl] = useState('')
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image) {
            toast.error('No image selected');
            return;
        }
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            if (response.data.success) {
                const imageUrl = response.data.data.url;

                const form = e.target;
                const candidateName = form.candidateName.value;
                const subject = form.subject.value;
                const candidateEmail = form.candidateEmail.value;
                const candidatePhone = form.candidatePhone.value;
                const candidateAddress = form.candidateAddress.value;
                const candidateDob = form.candidateDob.value;

                const admissionData = {
                    userEmail: user?.email,
                    candidateName,
                    subject,
                    candidateEmail,
                    candidatePhone,
                    candidateAddress,
                    candidateDob,
                    candidateImage: imageUrl,
                    collageId: id
                };

                // Send admissionData to your server
                const serverResponse = await axios.post('https://edu-book-server.vercel.app/admission-book', admissionData);
                if(serverResponse?.data?.data?.insertedId){
                    e.target.reset()
                    toast.success('Admission Book Done')
                    navigate('/my-collage')
                }
                // console.log(serverResponse);
                // Handle server response as needed
            } else {
                toast.error('Image upload failed');
                console.error('Image upload failed:', response.data.error);
            }
        } catch (error) {
            toast.error('Error uploading image');
            console.error('Error uploading image:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Admission Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="candidateName" className="block text-sm font-medium text-gray-700">
                            Candidate Name
                        </label>
                        <input
                            type="text"
                            name="candidateName"
                            id="candidateName"
                            placeholder="Enter candidate's name"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                            Subject
                        </label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            placeholder="Enter subject"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Candidate Email
                        </label>
                        <input
                            type="email"
                            name="candidateEmail"
                            id="email"
                            placeholder="Enter candidate's email"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Candidate Phone Number
                        </label>
                        <input
                            type="tel"
                            name="candidatePhone"
                            id="phone"
                            placeholder="Enter candidate's phone number"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                            Address
                        </label>
                        <textarea
                            name="candidateAddress"
                            id="address"
                            placeholder="Enter candidate's address"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500"
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            name="candidateDob"
                            id="dob"
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Upload Image
                        </label>
                        <input
                            onChange={handleImageChange}
                            type="file"
                            name="candidateImage"
                            id="image"
                            accept="image/*"
                            required
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmissionBook;