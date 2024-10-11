import React, { useEffect, useState } from 'react';

const Profile = () => {
    const [profileData, setProfileData] = useState(null);

    useEffect(() => {
        // API-verzoek om gegevens van de gebruiker op te halen
        const fetchProfileData = async () => {
            try {
                const response = await fetch('/api/getProfileData');
                if (response.ok) {
                    const data = await response.json();
                    setProfileData(data); // Sla de opgehaalde gegevens op in de state
                } else {
                    console.error('Failed to fetch profile data');
                }
            } catch (error) {
                console.error('Error fetching profile data:', error);
            }
        };

        fetchProfileData();
    }, []);

    if (!profileData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="profile-page">
            <h1>Welcome, {profileData.name}</h1>
            <p>City: {profileData.city}</p>
            <p>Country: {profileData.country}</p>
            {/* Voeg hier meer profielinformatie toe */}
        </div>
    );
};

export default Profile;
