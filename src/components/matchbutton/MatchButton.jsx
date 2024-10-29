import './MatchButton.css';

const MatchButton = ({ text, icon, onClick, type }) => {
    return (
        <button className={`match-button ${type}`} onClick={onClick}>
            <img src={icon} alt={`${text} icon`} className="button-icon" />
            {text}
        </button>
    );
};

export default MatchButton;