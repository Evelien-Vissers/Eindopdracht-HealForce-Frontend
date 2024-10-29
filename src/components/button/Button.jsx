import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ text, onClick, type = 'default', size = 'medium', link = '#' }) => {
    return link ? (
        <Link to={link} className={`btn ${type} ${size}`} onClick={onClick}>
            {text}
        </Link>
    ) : (
        <button type={type} className={`btn ${type} ${size}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;








