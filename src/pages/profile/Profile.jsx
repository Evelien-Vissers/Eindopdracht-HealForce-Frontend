import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css'
import profile from '../../assets/profile.png'
import Button from '../../components/button/Button.jsx'
import {Link} from "react-router-dom";

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
            <div className="overlay">
                <div className="start-matching-container">
                <Link to="/match">
                    <Button text="Start Matching" size="large" type="mint" className="start-matching-btn"></Button>
                </Link>
                </div>
            </div>
                <div className="miniProfile-container">
                    <div className="profile-pic">
                        <img src={profileData.profilePic || 'default-pic.jpg'} alt="Profile" />
                    </div>
                    {/*<h2 className="profile-name">[profileData.healForceName}</h2>*/}
                    <div className="profile-info">
                        <i className="health-icon"></i>
                        {/*<p className="profile-text">{profileData.healthChallenge} Warrior</p> */}
                    </div>

                    <div className="profile-info">
                        <i className="method-icon"></i>
                        {/*}<p className="profile-text">{profileData.healingChoice}</p> */}
                    </div>

                    <div className="profile-info">
                        <i className="location-icon"></i>
                        {/*<p className="profile-text">{profileData.location.city}, {profileData.location.country}</p>*/}
                    </div>

              {/*


                    <p className="profile-paragraph">{profileData.healthChallenge}</p>
                    <p className="profile-paragraph">{profileData.healingChoice}</p>*/}
                </div>
            </div>
    );
};

export default Profile;
