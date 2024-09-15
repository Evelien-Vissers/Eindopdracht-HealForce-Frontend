import './Footer.css'
import '../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <a href="/privacy-statement" className="footer-link">Privacy Statement</a>
                <a href="/user-agreement" className="footer-link">User Agreement</a>
            </div>

            <div className="footer-center">
                <p className="footer-company-name">Heal Force LLC</p>
                <img src="logo.png" alt="Heal Force Logo" className="footer-logo" />
            </div>
        </footer>
    );
};
export default Footer;