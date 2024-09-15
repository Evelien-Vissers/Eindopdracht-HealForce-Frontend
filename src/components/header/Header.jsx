import './Header.css'
import '../assets/logo.png'

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="logo.png" alt="Heal Force Logo" />
            </div>
            <nav className="nav-links">
                <a href="#home">Home</a>
                <span>|</span>
                <a href="#about">About Heal Force</a>
                <span>|</span>
                <a href="#contact">Contact Us</a>
                {/*In de HTML van de Homepage moet ik id's toevoegen aan de betreffende secties, bijv. <section id="home">, <section id="about"> en <section id="contact"> */}
            </nav>
        </header>
    )
}

export default Header;