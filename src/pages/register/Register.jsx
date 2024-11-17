import './Register.css';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Button from "../../components/button/Button.jsx";
import axios from "axios";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [acceptedPrivacyStatementUserAgreement, setAcceptedPrivacyStatementUserAgreement] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const registerData = {
            firstName,
            lastName,
            email,
            password,
            acceptedPrivacyStatementUserAgreement
        };

        try {
            const response = await axios.post('http://localhost:8080/users/register', registerData, {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (response.status === 201) {
                alert('Registration successful!')
                navigate("/login");
            } else {
                alert('Failed to register. Please try again later');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while registering.');
        }
    };

    return (
        <div className="register-page">
            <div className="register-block">
                <h2 className="register-title">Register and Start Your Heal Force Journey</h2>

                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="first-name" className="form-label">First Name:</label>
                    <input
                        type="text"
                        id="first-name"
                        className="form-input"
                        placeholder="Your First Name"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        required
                    />

                    <label htmlFor="last-name" className="form-label">Last Name:</label>
                    <input
                        type="text"
                        id="last-name"
                        className="form-input"
                        placeholder="Your Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required />

                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="Your Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password" className="form-label">Password for Heal Force Account:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="Create Your Heal Force Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    <div className="form-checkbox">
                        <input
                            type="checkbox"
                            id="agreement"
                            checked={acceptedPrivacyStatementUserAgreement}
                            onChange={(e) => setAcceptedPrivacyStatementUserAgreement(e.target.checked)}
                            required
                        />
                        <label htmlFor="agreement" className="checkbox-label">
                            By signing up, I agree with the <Link to="/privacypolicyuseragreement" className="link">Privacy Policy & User Agreement</Link> of Heal Force.
                        </label>
                    </div>

                    <Button text="Create My Free Heal Force Account" type="mint" size="large" onClick={handleSubmit} link="/login"/>

                    <div className="separator">or</div>

                    <div><p className="login-text">Already have an account?</p></div>
                        <Button text="Login" type="mint" size="medium" link="/login"/>
                </form>
            </div>
        </div>
    );
};

export default Register;

