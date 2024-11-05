import {createContext, useState, useEffect, useContext} from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: localStorage.getItem("token"),
        role: localStorage.getItem("role"),
        id: localStorage.getItem("id"),
        isAuthenticated: !!localStorage.getItem("token"),
        status: 'pending'
    });
    const navigate = useNavigate();

    useEffect(() => {
        setAuthState((prevState) => ({
            ...prevState,
            status: 'done'
        }));
    }, []);

    const login = async (token, userRole, id) => {
        localStorage.setItem("token", token);
        localStorage.setItem("role", userRole);
        localStorage.setItem("id", id);

        setAuthState((prevState) => ({
            ...prevState,
            token: token,
            role: userRole,
            id: id,
            isAuthenticated: true,
            status: 'done',
        }));

            navigate(userRole === "ROLE_ADMIN" ? '/admin' : '/questionnaire');
    }

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("id");

        setAuthState({
            token: null,
            role: null,
            id: null,
            isAuthenticated: false,
            status: 'done'
        });

        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{...authState, login, logout}}>
            {authState.status === 'pending'
                ? <p>Loading...</p>
                : children}
        </AuthContext.Provider>
    )
}
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export function useAuth() {
    return useContext(AuthContext);
}
