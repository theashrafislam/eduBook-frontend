import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const College = () => {
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchColleges = async () => {
            try {
                const response = await axios.get('https://edu-book-server.vercel.app/college-collection');
                // console.log(response?.data);
                setColleges(response?.data?.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchColleges();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Colleges</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-3 lg:mx-0">
                {colleges?.map((college) => (
                    <div key={college._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={college.image} alt={college.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{college.name}</h2>
                            <p className="text-gray-600 mb-1">Rating: {college.rating}</p>
                            <p className="text-gray-600 mb-1">
                                Admission Date: {new Date(college.admissionDate).toLocaleDateString()}
                            </p>
                            <p className="text-gray-600 mb-4">Research Papers: {college.researchCount}</p>
                            <Link
                                to={`/college/${college._id}`}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                            >
                                Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default College;