import './Details.css'
import { calculateAge } from '../../helpers/calculateAgeHelper.js';
import userList from "../../constants/userList.json";

const Details = ({ userList }) => {
    // Array van items die weergegeven moeten worden
    const details = [
        { label: 'Age', value: calculateAge(userList.dateOfBirth) },
        { label: 'Gender', value: userList.gender },
        { label: 'Warrior since', value: new Date(userList.diagnosisDate).toLocaleDateString() },
        { label: 'Treated at', value: userList.hospital },
        { label: 'Wants to be connected with', value: userList.connectionPreference }
    ];

    return (
        <div className="detail-container">
            {/* Gebruik .map() om de details dynamisch te genereren */}
            {details.map((detail, index) => (
                <div key={index} className="profile-info">
                    <p className="profile-label">{detail.label}:</p>
                    <p className="profile-text">{detail.value}</p>
                </div>
            ))}
        </div>
    );
};

export default Details;
