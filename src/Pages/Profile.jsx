import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";

const Profile = () => {
    const { user } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState([]);

    const getUserData = async () => {
       const res = await axios.get(`http://localhost:3000/`);
       console.log(res);
       setUserInfo(res)
       return res
    }

    useEffect(() => {
        getUserData()
    }, [user, isEditing])

    // const user = {
    //     name: "John Doe",
    //     email: "johndoe@example.com",
    //     // university: "Harvard University",
    //     address: "123 Main St, New York",
    // };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md shadow-lg rounded-2xl p-6 bg-white flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="w-24 h-24 bg-gray-300 rounded-full mb-4">
                    <img src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png" alt="" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{user.name}</h2>
                <p className="text-gray-500 mb-4">{user.email}</p>

                <div className="w-full space-y-4 text-left">
                    {/* University */}
                    <div>
                        <label className="block text-gray-600">University</label>
                        {isEditing ? (
                            <input type="text" defaultValue={user.university} className="mt-1 w-full p-2 border rounded-md" />
                        ) : (
                            <p className="mt-1 text-gray-800">{user.university}</p>
                        )}
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block text-gray-600">Address</label>
                        {isEditing ? (
                            <input type="text" defaultValue={user.address} className="mt-1 w-full p-2 border rounded-md" />
                        ) : (
                            <p className="mt-1 text-gray-800">{user.address}</p>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-2 mt-6">
                    {isEditing ? (
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            onClick={() => setIsEditing(false)}
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;