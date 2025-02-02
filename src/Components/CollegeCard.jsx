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
                <p className="text-gray-600 mt-2">
                    <span className="font-semibold">Research:</span> {college.researchCount}
                </p>
                <p className="mt-2">
                    <span className="font-semibold">Sports:</span> {college.sports.join(", ")}
                </p>
                <div className="mt-3">
                    <span className="text-blue-500 font-semibold">Upcoming Events:</span>
                    <ul className="text-gray-700 list-disc pl-5">
                        {college.events.map((event, index) => (
                            <li key={index}>{event}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </Link>
    );
};

export default CollegeCard;