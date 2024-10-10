import './Header.css'
import logo from '../../assets/logo.png'
import {Link} from "react-router-dom";
import Button from "../button/Button.jsx";

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
                        <Link to="/mission">Our Mission</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
            <Button text="Login" type="mint" size = "medium" link="/login"/>
        </header>
    )
}

export default Header;