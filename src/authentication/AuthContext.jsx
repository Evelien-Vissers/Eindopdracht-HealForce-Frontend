import {createContext, useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedRole = localStorage.getItem("role");
        if (token) {
            setIsAuthenticated(true);
            setRole(storedRole);
        }
    }, []);

    const login = (token, userRole) => {
        localStorage.setItem("token", token);
        localStorage.setItem("role", userRole);
        setIsAuthenticated(true);
        setRole(userRole);

        if (userRole === "admin") {
            navigate('/admin');
        } else {
        navigate('/questionnaire');
    }};

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        setIsAuthenticated(false);
        setRole(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{isAuthenticated, role, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth() {
    return useContext(AuthContext);
}
