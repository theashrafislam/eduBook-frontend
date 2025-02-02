import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CollegeCard from '../Components/CollegeCard';

const Admission = () => {
    const [colleges, setColleges] = useState([]);
    const getData = async () => {
        try {
            const result = await axios.get('http://localhost:3000/college-collection');
            setColleges(result?.data?.data || []);
        } catch (error) {
            console.error('Error fetching colleges:', error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    // console.log(colleges);

    return (
        <div className="max-w-6xl mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                College List
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {colleges.map((college) => (
                    <CollegeCard key={college._id} college={college} />
                ))}
            </div>
        </div>
    );
};

export default Admission;