import './Register.css';
import { Link } from 'react-router-dom';
import Button from "../../components/button/Button.jsx";

const Register = () => {
    return (
        <div className="register-page">
            <div className="register-block">
                <h2 className="register-title">Register and Start Your Heal Force Journey</h2>

                <form className="register-form">
                    <label htmlFor="first-name" className="form-label">First Name:</label>
                    <input type="text" id="first-name" className="form-input" placeholder="Your First Name" required />

                    <label htmlFor="last-name" className="form-label">Last Name:</label>
                    <input type="text" id="last-name" className="form-input" placeholder="Your Last Name" required />

                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" className="form-input" placeholder="Your Email" required />

                    <label htmlFor="password" className="form-label">Password for Heal Force Account:</label>
                    <input type="password" id="password" className="form-input" placeholder="Create a Password" required />

                    <div className="form-checkbox">
                        <input type="checkbox" id="agreement" required />
                        <label htmlFor="agreement" className="checkbox-label">
                            By signing up, I agree with the <Link to="/user-agreement" className="link">User Agreement</Link> & <Link to="/privacy-policy" className="link">Privacy Policy</Link> of Heal Force.
                        </label>
                    </div>

                    <Button text="Create My Free Heal Force Account" type="mint" size="large" />

                    <div className="separator">or</div>

                    <div><p className="login-text">Already have an account?</p></div>
                        <Button text="Login" type="mint" size="medium" />
                </form>
            </div>
        </div>
    );
};

export default Register;

