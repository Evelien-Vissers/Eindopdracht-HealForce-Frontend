import {Navigate} from 'react-router-dom';
import {useAuth} from './AuthContext.jsx';

const ProtectedRoute = ({children, roleRequired }) => {
    const {user, role} = useAuth();

    if (!user || (roleRequired && role !== roleRequired)) {
        return <Navigate to="/login" replace/>;
    }

    return children;
};

export default ProtectedRoute;