import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import Button from '../../components/button/Button.jsx';
import { Link } from "react-router-dom";
import Details from "../../components/details/Details.jsx";

const Profile = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        // Fetch profile data from database
        axios.get('api/profile')
            .then(response => {
                setProfileData(response.data);
            })
            .catch(error => {
                console.error('Error fetching profile data:', error);
            });
    }, []);

    if (!profileData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-page">
            {/* Nieuwe container voor de button */}
            <div className="start-matching-container">
                <Link to="/match">
                    <Button text="Start Matching" size="large" type="mint" />
                </Link>
            </div>
            <div className="overlay">
                <div className="miniProfile-container">
                    <div className="profile-pic">
                        <img src={profileData.profilePic || 'default-pic.jpg'} alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
