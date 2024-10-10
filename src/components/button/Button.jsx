import './Button.css';
import { Link } from 'react-router-dom';

const Button = ({ text, onClick, type = 'default', size = 'medium', link = '#' }) => {
    return (
        <Link to={link} className={`btn ${type} ${size}`} onClick={onClick}>
            {text}
        </Link>
    );
};

export default Button;








