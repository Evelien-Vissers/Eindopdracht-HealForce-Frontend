import { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import Button from '../../components/button/Button.jsx';
import { Link } from "react-router-dom";
import {calculateAge} from "../../helpers/calculateAgeHelper.js";


const Profile = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        // Fetch profile data from database
        axios.get('http://localhost:8000/profiles/{profileID}')
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
    const age = calculateAge(profileData);

    return (
        <div className="profile-page">
            <div className="start-matching-container">

                    <Button text="Start Matching" size="large" type="mint" link="/match" />

            </div>
            <div className="overlay">
                <div className="miniProfile-container">
                    <div className="profile-pic">
                        <img src={profileData.profilePicture || 'default-pic.jpg'} alt="Profile" className="profile-image" />
                    </div>
                    <article className="miniProfile-data">
                        <h3>{profileData.healForceName}</h3>
                        <p>{profileData.city}, {profileData.country}</p>
                        <p>{profileData.healthChallenge} Warrior</p>
                        <p>Healing Choice: {profileData.healingChoice}</p>
                    </article>
                </div>

                <div className="detail-container">
                    <p><strong>Age:</strong> {age}</p>
                    <p><strong>Gender:</strong> {profileData.gender}</p>
                    <p><strong>Diagnosis Date:</strong> {new Date(profileData.diagnosisDate)}</p>
                    <p><strong>Treated at:</strong> {profileData.hospital}</p>
                    <p><strong>Connection Preference:</strong> {profileData.connectionPreference}</p>

                </div>
            </div>
        </div>
    );
};

export default Profile;
