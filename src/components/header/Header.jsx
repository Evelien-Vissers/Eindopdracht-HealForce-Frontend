import './Header.css'
import logo from '../../assets/logo.png'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Heal Force Logo"/>
            </div>
            <nav>
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/mission">Our Mission & Vision</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;