import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import DetailsCard from '../Components/DetailsCard';

const MyCollage = () => {
    const { user } = useAuth();
    const [collageId, setCollageId] = useState([]);
    const [collageData, setCollageData] = useState([]);
    const filteredData = collageData.filter(item => collageId.includes(item._id));
    // console.log(filteredData);

    const getCollageId = async () => {
        const response = await axios.get(`http://localhost:3000/admission-book/${user?.email}`);
        setCollageId(response?.data);
        // console.log(response?.data);
    }

    const collageDataGet = async () => {
        const response = await axios.get('http://localhost:3000/college-collection');
        setCollageData(response?.data?.data)
        // console.log(response?.data?.data);
    }

    useEffect(() => {
        getCollageId();
        collageDataGet();
    }, [user])

    return (
        <div>
            {
                filteredData?.map((item, index) => (
                    <DetailsCard key={index} data={item} />
                ))
            }
        </div>
    );
};

export default MyCollage;