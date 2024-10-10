import './Footer.css'
import logo from '../../assets/logo.png'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <Link to="/privacy-statement" className="footer-link">Privacy Statement</Link>
                <Link to="/user-agreement" className="footer-link">User Agreement</Link>
            </div>

            <div className="footer-center">
                <p className="footer-company-name">Heal Force LLC ©</p>
                <img src={logo} alt="Heal Force Logo" className="footer-logo" />
            </div>
        </footer>
    );
};
export default Footer;