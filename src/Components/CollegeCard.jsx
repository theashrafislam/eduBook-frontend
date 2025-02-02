import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({college}) => {
    return (
        <Link to={`/admission/${college._id}`} className="bg-white cursor-pointer shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:scale-105 transition-transform duration-300">
            <img src={college.image} alt={college.name} className="w-full h-40 object-cover" />
            <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-900">{college.name}</h3>
                <p className="text-gray-600 mt-2">
                    <span className="font-semibold">Admission:</span> {college.admissionDates}
                </p>
            </div>
        </Link>
    );
};

export default CollegeCard;