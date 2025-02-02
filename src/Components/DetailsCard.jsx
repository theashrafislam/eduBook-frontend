import React, { useState } from 'react';

const DetailsCard = ({ data }) => {
    const [selectedRating, setSelectedRating] = useState(data?.rating || 0);

    // Handle rating change
    const handleRatingChange = (rating) => {
        setSelectedRating(rating);
        console.log("Selected Rating:", rating);

    };

    return (
        <div className='grid grid-cols-2 gap-3 items-center'>
            <div className="">
                <img
                    className="h-48 w-full object-cover"
                    src={data?.image}
                    alt={data?.name}
                />
            </div>
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {data?.name}
                </div>
                <p className="mt-2 text-gray-500">
                    Admission Dates: {data?.admissionDates}
                </p>

                {/* ⭐ Interactive Rating System */}
                <div className="mt-2 flex items-center">
                    <p className="text-gray-500 mr-2">Rating:</p>
                    <div className="rating">
                        {[...Array(5)].map((_, i) => (
                            <input
                                key={i}
                                type="radio"
                                name={`rating-${data?.id}`} 
                                className="mask mask-star-2 bg-orange-400"
                                checked={selectedRating === i + 1}
                                onChange={() => handleRatingChange(i + 1)}
                            />
                        ))}
                    </div>
                    <span className="ml-2 text-gray-500">{selectedRating} / 5</span>
                </div>

                <p className="mt-2 text-gray-500">
                    Research Count: {data?.researchCount}
                </p>
                <p className="mt-2 text-gray-500">
                    Events: {data?.events?.join(', ')}
                </p>
                <p className="mt-2 text-gray-500">
                    Sports: {data?.sports?.join(', ')}
                </p>
            </div>
        </div>
    );
};

export default DetailsCard;