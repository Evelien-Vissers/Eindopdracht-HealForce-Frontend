import './Button.css'

const Button = ({ text, onClick, type = 'default', size = 'medium', link = '#' }) => {
    return (
        <a href={link} className={`btn ${type} ${size}`} onClick={onClick} >
            {text}
        </a>
    );
};
export default Button;