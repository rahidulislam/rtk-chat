import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'

export default function PublicRoute({children}) {
    const isLoggedIn = useAuth();
    console.log("status: ", isLoggedIn);
  return !isLoggedIn ? children : <Navigate to="/inbox" />
}
