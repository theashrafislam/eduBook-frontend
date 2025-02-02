import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CollegeSection = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = () => {
        getData(searchQuery)
    };

    const [collages, setCollages] = useState([]);
    // console.log(collages);

    const getData = async (query = '') => {
        try {
            const result = await axios.get('https://edu-book-server.vercel.app/college-collection', {
                params: { search: query }
            });
            setCollages(result?.data?.data || []);
        } catch (error) {
            console.error('Error fetching colleges:', error);
        }
    };

    useEffect(() => {
        getData();
    }, [])


    return (
        <div className="max-w-6xl mx-auto py-12 px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Explore Top Colleges
            </h2>

            {/* Search Box and Button */}
            <div className="z-10 flex gap-2 p-4 border-2 rounded-lg shadow-lg backdrop-blur-md w-full mx-auto bg-white/30 mb-5">
                <input
                    type="text"
                    placeholder="Search College Name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-4 py-2 w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSearch}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Search
                </button>
            </div>


            <div className="grid md:grid-cols-3 gap-8">
                {collages.slice(0, 3).map((college) => (
                    <div key={college._id} className="bg-white/30 shadow-lg rounded-xl overflow-hidden border border-gray-200 hover:scale-105 transition-transform duration-300">
                        <img src={college.image} alt={college.name} className="w-full h-40 object-cover" />
                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-gray-900">{college.name}</h3>
                            <p className="text-gray-600 mt-2">
                                <span className="font-semibold">Admission:</span> {college.admissionDates}
                            </p>
                            <p className="text-gray-600 mt-2"><span className="font-semibold">Research:</span> {college.researchCount}</p>
                            <p className="mt-2"><span className="font-semibold">Sports:</span> {college.sports.join(", ")}</p>
                            <div className="mt-3">
                                <span className="text-blue-500 font-semibold">Upcoming Events:</span>
                                <ul className="text-gray-700 list-disc pl-5">
                                    {college.events.map((event, index) => (
                                        <li key={index}>{event}</li>
                                    ))}
                                </ul>
                            </div>
                            <Link to={`/college/${college._id}`}>
                                <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CollegeSection;  