import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CollegeDetails() {
    const { id } = useParams();
    const [college, setCollege] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // console.log(college)

    useEffect(() => {
        const fetchCollege = async () => {
            try {
                const response = await axios.get(`https://edu-book-server.vercel.app/college-collection/${id}`);
                setCollege(response?.data?.data);
            } catch (err) {
                setError('Error fetching college details');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchCollege();
    }, [id]);

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }

    if (!college) {
        return <p className="text-center text-gray-500">College not found.</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col md:flex-row items-center">
                <img
                    src={college.image}
                    alt={college.name}
                    className="w-full md:w-1/2 h-auto rounded-lg mb-6 md:mb-0"
                />
                <div className="md:ml-6">
                    <h1 className="text-3xl font-semibold text-gray-800">{college.name}</h1>
                    <p className="text-xl text-gray-600 mt-2">Rating: {college.rating}</p>
                    <p className="text-lg text-gray-600 mt-2">Admission Date: {college.admissionDates}</p>
                    <p className="text-lg text-gray-600 mt-2">Research Papers: {college.researchCount}</p>
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Events</h2>
                        <ul className="list-disc pl-5 mt-2">
                            {college.events.map((event, index) => (
                                <li key={index} className="text-gray-600">{event}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Sports Facilities</h2>
                        <ul className="list-disc pl-5 mt-2">
                            {college.sports.map((sport, index) => (
                                <li key={index} className="text-gray-600">{sport}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CollegeDetails;