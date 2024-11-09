import { useAuth } from '../../authentication/AuthContext';
import Button from "../button/Button.jsx";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <Button onClick={handleLogout} text="Logout" type= "black" size="small" className="logout-button">
            Logout
        </Button>
    );
};

export default LogoutButton;