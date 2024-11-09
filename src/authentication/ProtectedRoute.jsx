import {Navigate} from 'react-router-dom';
import {useAuth} from './AuthContext.jsx';
import PropTypes from "prop-types";

const ProtectedRoute = ({children, roleRequired }) => {
    const {isAuthenticated, role} = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    if (roleRequired && role !== roleRequired) {
            return <Navigate to="/profile" replace />;
        }
    return children;

};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    roleRequired: PropTypes.string,
}

export default ProtectedRoute;