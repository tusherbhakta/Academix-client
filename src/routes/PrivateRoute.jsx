import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();

    if (loading) {
        return (
            <div className='flex flex-col gap-2 justify-center items-center '>
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }

    if (user) {
        return children
    } else {
        return (
            <Navigate to="/login" replace />
        )
    }


}

export default PrivateRoute
