import './Login.css';
import { Link } from 'react-router-dom';
import Button from "../../components/button/Button.jsx";

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-block">
                <h2 className="login-title">Login</h2>

                <form className="login-form">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" className="form-input" placeholder="Your Email" required />

                    <label htmlFor="password" className="form-label">Password:</label>
                    <input type="password" id="password" className="form-input" placeholder="Enter your Password" required />

                    <Button text="Login" type="mint" size="large" />

                    <div className="forgot-password">
                        <Link to="/forgot-password" className="link">Forgot your password?</Link>
                    </div>

                    <div className="separator">or</div>

                    <div className="register-prompt">
                        <p className="register-text">Don't have an account yet?</p>
                        <Button text="Register" type="mint" size="medium" link="/register"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
