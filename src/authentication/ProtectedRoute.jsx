import {Navigate} from 'react-router-dom';
import {useAuth} from './AuthContext.jsx';
import PropTypes from "prop-types";

const ProtectedRoute = ({children, roleRequired }) => {
    const {isAuthenticated, role} = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    if (roleRequired === "ADMIN") {
        if (role === "ROLE_ADMIN") {
            return children;
        } else {
            return <Navigate to="/questionnaire" replace />;
        }
    }

};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    roleRequired: PropTypes.string,
}

export default ProtectedRoute;