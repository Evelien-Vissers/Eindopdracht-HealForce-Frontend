import './Footer.css'
import logo from '../../assets/logo.png'
import {Link} from "react-router-dom";
import { redirectToHome} from "../../helpers/logoClickHelper.js";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <Link to="/privacypolicy" className="footer-link">Privacy Policy</Link>
                <Link to="/useragreement" className="footer-link">User Agreement</Link>
            </div>

            <div className="footer-center">
                <p className="footer-company-name">Heal Force LLC ©2024</p>
                <img src={logo} alt="Heal Force Logo" className="footer-logo" onClick={redirectToHome} />
            </div>
        </footer>
    );
};
export default Footer;