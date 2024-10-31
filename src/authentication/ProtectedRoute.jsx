import {Navigate} from 'react-router-dom';
import {useAuth} from './AuthContext.jsx';

const ProtectedRoute = ({children, roleRequired }) => {
    const {isAuthenticated, role} = useAuth();

    if (isAuthenticated === null) {
        return null;
    }
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    if (role === "ROLE_ADMIN" && roleRequired !== null) {
        return <Navigate to="/admin" replace />;
    }
    if (role !== "ROLE_ADMIN" && roleRequired === "USER") {
        return <Navigate to="/questionnaire" replace />
    }

    return children;
};

export default ProtectedRoute;