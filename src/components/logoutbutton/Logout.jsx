import { useAuth } from '../../authentication/AuthContext';
import Button from "../button/Button.jsx";

const LogoutButton = () => {
    const { logout } = useAuth();

    return (
        <Button onClick={logout} text="Logout" type= "black" size="small" className="logout-button">
            Logout
        </Button>
    );
};

export default LogoutButton;