import {createContext, useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState(null);
    const [id, setId] = useState(null);
    const [status, setStatus] = useState('pending');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedRole = localStorage.getItem("role");
        const storedId = localStorage.getItem("id");

        if (token) {
            setIsAuthenticated(true);
            setRole(storedRole);
            setId(storedId);
        }
        setStatus('done');
    }, []);

    const login = (token, userRole, id) => {
        localStorage.setItem("token", token);
        localStorage.setItem("role", userRole);
        localStorage.setItem("id", id);
        setIsAuthenticated(true);
        setRole(userRole);
        setId(id);

        if (userRole === "ADMIN") {
            navigate('/admin');
        } else {
        navigate('/questionnaire');
    }};

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("id");
        setIsAuthenticated(false);
        setRole(null);
        setId(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, role, id, login, logout}}>
            {status === 'pending' ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export function useAuth() {
    return useContext(AuthContext);
}
