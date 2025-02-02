import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ReviewSection = () => {
  const [collageData, setCollageData] = useState([]);
  const getCollgeData = async () => {
    const res = await axios.get('http://localhost:3000/college-collection');
    setCollageData(res?.data?.data)
    // console.log(res?.data?.data);
  }

  useEffect(() => {
    getCollgeData();
  }, [])

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          User Reviews and Feedback
        </h2>
        <div className="space-y-4">
          {collageData.slice(0, 3).map((review, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg border-2 shadow hover:shadow-lg transition duration-300 text-left"
            >
              <h3 className="text-lg font-semibold text-gray-700">
                {review.name}
              </h3>
              <div className="flex items-center mt-2 mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.075 9.384c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;