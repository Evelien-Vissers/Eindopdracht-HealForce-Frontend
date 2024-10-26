import './Login.css';
import {useContext, useState} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from "../../components/button/Button.jsx";
import axios from "axios";
import {AuthContext} from "../../authentication/AuthContext.jsx";


const Login = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const loginData = {
        email,
        password,
        };

        try {
            const loginResponse = await axios.post('http://localhost:8080/users/login', loginData);

            if (loginResponse.status === 200) {
                const {token} = loginResponse.data;

                login(token);

                const profileResponse = await axios.get('http://localhost:8080/profile/{profileID}/hasCompletedQuestionnaire', {
                    headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
                // Check of de questionnaire is voltooid
                const { hasCompletedQuestionnaire } = profileResponse.data;
                if (hasCompletedQuestionnaire) {
                // Navigeer naar profiel-pagina als de questionnaire is voltooid
                    navigate('/profile');
                } else {
                // Navigeer naar de Questionnaire-pagina als deze nog niet voltooid is
                    navigate('/questionnaire');
                }
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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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

                    <Button text="Login" type="mint" size="large" htmlType="submit" />

                    <div className="separator">or</div>

                    <div className="register-prompt">
                        <p className="register-text">Don&apos;t have an account yet?</p>
                        {/*<Link to={register} className={'btn ${mint} ${size}'}></Link>*/}
                        <Button text="Register" type="mint" size="medium" link="/register"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
