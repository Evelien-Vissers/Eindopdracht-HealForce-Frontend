import {Navigate} from 'react-router-dom';
import {useAuth} from './AuthContext.jsx';
import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const ProtectedRoute = ({children, roleRequired }) => {
    const {isAuthenticated, role, id} = useAuth();
    const [hasProfile, setHasProfile] = useState(null);

    useEffect(() => {
        const checkUserProfile = async () => {
            try {
                const response = await fetch(`http://localhost:8080/profiles/${id}`);
                if (response.ok) {
                    setHasProfile(true);
                } else if (response.status === 404) {
                    setHasProfile(false);
                }
            } catch (error) {
                console.error('Error checking user profile', error);
            }
        };
        if (isAuthenticated && id) {
            checkUserProfile();
        }
    }, [isAuthenticated, id]);

    if (isAuthenticated === null || hasProfile === null) {
        return null;
    }
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    if (role === "ROLE_ADMIN" && roleRequired === "ADMIN") {
        return <Navigate to="/admin" replace />;
    }

    if (role === "ROLE_USER" && !hasProfile) {
        return <Navigate to="/questionnaire" replace />;
    }
    if (role === "ROLE_USER" && hasProfile) {
        return <Navigate to="/profile" replace />;
    }

    return children;
};
ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    roleRequired: PropTypes.string,
}

export default ProtectedRoute;