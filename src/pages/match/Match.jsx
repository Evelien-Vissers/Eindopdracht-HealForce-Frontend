import './Match.css'
import location from '../../assets/locationicon.png'
import warrior from '../../assets/warrioricon.png'
import method from '../../assets/healingicon.png'
import Button from "../../components/button/Button.jsx";

// eslint-disable-next-line react/prop-types
const Match = ({ profile }) => {
    return (
        <div className="matching-page">
            <Button text="Go Back To My Profile" type="mint" size="large" link="/profile" />
            <div className="miniProfileMatch-container">
                {/*<img src={profile.ProfilePic} alt="Profile" className="profile-pic" />
                <h2>{profile.HealForceName}</h2>
                <p><img src={location} alt="Location icon" /> {profile.Location}</p>
                <p><img src={warrior} alt="HealthChallenge icon" /> {profile.HealthChallenge}</p>
                <p><img src={method} alt="HealingChoice icon" /> {profile.HealingChoice}</p>*/}
            </div>
        </div>
    );
};

export default Match;