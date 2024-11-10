import { useEffect, useState } from 'react';
import axios from 'axios';
import './Profile.css';
import Button from '../../components/button/Button.jsx';
import {useNavigate} from "react-router-dom";
import {calculateAge} from "../../helpers/calculateAgeHelper.js";
import location from '../../assets/locationicon.png';
import warrior from '../../assets/warrioricon.png';
import healing from '../../assets/healingicon.png';
import {useAuth} from "../../authentication/AuthContext.jsx";
import Logout from "../../components/logoutbutton/Logout.jsx";


const Profile = () => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const {token, id} = useAuth();

    useEffect(() => {
        const fetchProfileData = async () => {
            if (!token || !id) {
                setError("Authentication error. Please login again.");
                setLoading(false);
                return;
            }
            try {
                const response = await axios.get(`http://localhost:8080/profiles/${id}`, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: token,
                    }
                });
                setProfileData(response.data);
            } catch (error) {
                console.error('Error fetching profile data:', error);
                setError('Error fetching profile data. Please try again');
            } finally {
                setLoading(false);
            }
        };
        fetchProfileData();
    }, [token, id]);

    const handleDeleteProfile = async () => {
        if (!token || !id) {
            setError("Authentication error. Please login again.");
            return;
        }

        try {
            await axios.delete(`http://localhost:8080/profiles/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });

            navigate("/");

            } catch(error) {
                console.error('Error deleting profile', error);
                setError('Error deleting profile data. Please try again');
            }
    };

    const defaultProfile = {
        healForceName: 'N/A',
        city: 'Unknown',
        country: 'Unknown',
        healingChoice: 'Unknown',
        profilePicUrl: 'default-pic.jpg',
        gender: 'Unknown',
        diagnosis: 'Unknown',
        hospital: 'Unknown',
        connectionPreference: 'Unknown',
    };

    const age = profileData && profileData.dateOfBirth ? calculateAge(profileData.dateOfBirth) : 'N/A';
    const displayedProfileData = profileData || defaultProfile;

    const profilePicUrl = displayedProfileData.profilePicUrl.startsWith('/uploads')
        ?`http://localhost:8080/${displayedProfileData.profilePicUrl}`
        : 'default-pic.jpg';

    if (loading) {
        return <p>Loading profile...</p>;
    }

        return (
            <div className="profile-page">

                <div className="adjustbutton-container">
                    <Button text="Adjust My Profile" size="large" type="mint" link="/questionnaire"></Button>
                    <Button text="Start Matching" size="large" type="mint" link="/match"></Button>
                </div>

                <div className="overlay">
                    <div className="miniProfile-container">
                        <div className="profile-pic-container">
                            <img className="profile-pic-profile" src={displayedProfileData.profilePicUrl} alt="Profile"/>
                        </div>
                        <div className="miniProfile-data">
                            <h3 className="healforce-name">{displayedProfileData.healforceName}</h3>
                            <p><img src={location} alt="Location icon" className="icon"/>
                                {displayedProfileData.city}, {displayedProfileData.country}</p>
                            <p><img src={warrior} alt="Warrior icon" className="icon"/>
                                {displayedProfileData.healthChallenge} Warrior</p>
                            <p><img src={healing} alt="Healing icon" className="icon"/>
                                Healing Choice: {displayedProfileData.healingChoice}</p>
                        </div>
                    </div>

                    <div className="detail-container">
                        <p><strong>Age:</strong> {age}</p>
                        <p><strong>Gender:</strong> {displayedProfileData.gender}</p>
                        <p><strong>Diagnosis
                            Date:</strong> {displayedProfileData.diagnosisDate !== 'N/A' ? new Date(displayedProfileData.diagnosisDate).toLocaleDateString() : 'N/A'}
                        </p>
                        <p><strong>Treated at:</strong> {displayedProfileData.hospital}</p>
                        <p><strong>Connection Preference:</strong> {displayedProfileData.connectionPreference}</p>
                    </div>


                    <div className="deletebutton-container">
                        <Button text="Delete My Profile" size="small" type="black"
                                onClick={handleDeleteProfile}></Button>
                        <Logout />
                    </div>
                    {error && <div className="error-message">{error}</div>}
                </div>

            </div>
        );
};


export default Profile;
