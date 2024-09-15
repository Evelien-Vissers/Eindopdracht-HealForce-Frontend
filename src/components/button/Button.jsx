import './Button.css'

const Button = ({ text, onClick, type = 'default', size = 'medium', link = '#' }) => {
    return (
        <a href={link} className={`btn ${type} ${size}`} onClick={onClick} >
            {text}
        </a>
    );
};
export default Button;

/* Zie hieronder hoe de verschillende buttons gebruikt kunnen worden: */
/* Login Button: <Button text="Login" type="mint" size="medium" /> */
/* Start Your Heal Force Journey Now Button: <Button text="Start Your Heal Force Journey Now" type="black" size="large" link="/registration" /> */
/* Submit Contact Form Button: <Button text="Submit" type="mint" size="medium" /> */
/* Register Button: <Button text="Register" type="mint" size="medium" /> */
/* Submit Questionnaire: <Button text="Submit Questionnaire" type="black" size="large" link="/create-profile" /> */
/* Upload Button <Button text="Upload" type="mint" size="medium" /> */
/* Cancel Button: <Button text="Cancel" type="cancel" size="medium" /> */
/* Create My Heal Force Profile Button: <Button text="Create My Heal Force Profile" type="black" size="large" link="/profile" /> */
/* Start Matching Button: <Button text="Start Matching" type="gradient" size="large" link="/match" /> */







