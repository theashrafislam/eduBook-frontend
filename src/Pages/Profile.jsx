import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";

const Profile = () => {
    const { user } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    // console.log(isEditing);

    const getUserData = async () => {
        const res = await axios.get(`https://edu-book-server.vercel.app/profile/${user?.email}`);
        setUserInfo(res?.data);
    };

    const handleForm = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const university = form.university.value;
        const address = form.address.value;
        const extraInfo = {
            name,
            university,
            address
        };

        try {
            const res = await axios.patch(`https://edu-book-server.vercel.app/profile-update/${user?.email}`, extraInfo);
            // console.log(res);
            // console.log(res?.data);
            if(res?.data?.data?.modifiedCount > 0){
                setIsEditing(false)
                toast.success(res?.data?.message)
            }
            
        } catch (error) {
            toast.error(error.message)
            // console.error("Error updating profile:", error);
        }
    };

    useEffect(() => {
        getUserData();
    }, [user, isEditing]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <form onSubmit={handleForm} className="w-full max-w-md shadow-lg rounded-2xl p-6 bg-white flex flex-col items-center text-center">
                {/* Profile Image */}
                <div className="w-24 h-24 bg-gray-300 rounded-full mb-4">
                    <img src="https://cdn3.iconfinder.com/data/icons/essential-rounded/64/Rounded-31-512.png" alt="" />
                </div>

                {/* Name Field */}
                <div className="w-full space-y-4 text-left">
                    <div>
                        <label className="block text-gray-600">Name</label>
                        {isEditing ? (
                            <input
                                name="name"
                                type="text"
                                defaultValue={userInfo.name || ""}
                                className="mt-1 w-full p-2 border rounded-md"
                                required
                            />
                        ) : (
                            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{userInfo.name}</h2>
                        )}
                    </div>

                    <p className="text-gray-500 mb-4">{userInfo.email}</p>

                    {/* University Field */}
                    <div>
                        <label className="block text-gray-600">University</label>
                        {isEditing ? (
                            <input
                                name="university"
                                type="text"
                                defaultValue={userInfo.university || ""}
                                className="mt-1 w-full p-2 border rounded-md"
                                required
                            />
                        ) : (
                            <p className="mt-1 text-gray-800">{userInfo.university}</p>
                        )}
                    </div>

                    {/* Address Field */}
                    <div>
                        <label className="block text-gray-600">Address</label>
                        {isEditing ? (
                            <input
                                name="address"
                                type="text"
                                defaultValue={userInfo.address || ""}
                                className="mt-1 w-full p-2 border rounded-md"
                                required
                            />
                        ) : (
                            <p className="mt-1 text-gray-800">{userInfo.address}</p>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-center space-x-2 mt-6">
                    {isEditing ? (
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                            onClick={() => setIsEditing(true)}
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Profile;