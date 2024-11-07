import { useEffect, useState } from 'react';
import axios from 'axios';
import './OtherProfile.css';
import Button from '../../components/button/Button.jsx';
import { useNavigate, useParams } from 'react-router-dom';
import { calculateAge } from "../../helpers/calculateAgeHelper.js";
import location from '../../assets/locationicon.png';
import warrior from '../../assets/warrioricon.png';
import healing from '../../assets/healingicon.png';
import { useAuth } from "../../authentication/AuthContext.jsx";

const OtherProfile = () => {
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { token } = useAuth();
    const { profileId } = useParams();

    useEffect(() => {
        const fetchProfileData = async () => {
            if (!token) {
                setError("Authentication error. Please login again.");
                setLoading(false);
                return;
            }
            try {
                const response = await axios.get(`http://localhost:8080/profiles/${profileId}`, {
                    headers: {
                        "Content-Type": "application/json",
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
    }, [token, profileId]);

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
        ? `http://localhost:8080/${displayedProfileData.profilePicUrl}`
        : 'default-pic.jpg';

    if (loading) {
        return <p>Loading profile...</p>;
    }

    return (
        <div className="other-profile-page">

            <div className="back-button-container">
                <Button text="Go Back to My Matching Page" size="large" type="mint" onClick={() => window.location.href = ('/match')} />
            </div>

            <div className="overlay">
                <div className="miniProfile-container">
                    <div className="profile-pic-container">
                        <img className="profile-pic-otherProfile" src={displayedProfileData.profilePicUrl} alt="Profile" />
                    </div>
                    <div className="miniProfile-data">
                        <h3 className="healforce-name">{displayedProfileData.healForceName}</h3>
                        <p><img src={location} alt="Location icon" className="icon" />
                            {displayedProfileData.city}, {displayedProfileData.country}</p>
                        <p><img src={warrior} alt="Warrior icon" className="icon" />
                            {displayedProfileData.healthChallenge} Warrior</p>
                        <p><img src={healing} alt="Healing icon" className="icon" />
                            Healing Choice: {displayedProfileData.healingChoice}</p>
                    </div>
                </div>

                <div className="detail-container">
                    <p><strong>Age:</strong> {age}</p>
                    <p><strong>Gender:</strong> {displayedProfileData.gender}</p>
                    <p><strong>Diagnosis Date:</strong> {displayedProfileData.diagnosisDate !== 'N/A' ? new Date(displayedProfileData.diagnosisDate).toLocaleDateString() : 'N/A'}</p>
                    <p><strong>Treated at:</strong> {displayedProfileData.hospital}</p>
                    <p><strong>Connection Preference:</strong> {displayedProfileData.connectionPreference}</p>
                </div>

                {error && <div className="error-message">{error}</div>}
            </div>

        </div>
    );
};

export default OtherProfile;
