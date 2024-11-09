import './Login.css';
import {useContext, useState} from 'react';
import Button from "../../components/button/Button.jsx";
import axios from "axios";
import {AuthContext} from "../../authentication/AuthContext.jsx";


const Login = () => {
    const { login } = useContext(AuthContext);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
        userName: userName,
        password: password,
        };

        try {
            const loginResponse = await axios.post('http://localhost:8080/login', loginData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (loginResponse.status === 200) {
                const {token, role, id} = loginResponse.data;
                login(token, role, id);

        } else {
            alert('Login failed. Please check your credentials');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred during login');
    }
};

    return (
        <div className="login-page">
            <div className="login-block">
                <h2 className="login-title">Login</h2>

                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="Your Email"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        required
                    />

                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required />

                    <Button text="Login" type="mint" size="large" onClick={handleSubmit} />

                    <div className="separator">or</div>

                    <div className="register-prompt">
                        <p className="register-text">Don&apos;t have an account yet?</p>
                        <Button text="Register" type="mint" size="medium" link="/register"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
