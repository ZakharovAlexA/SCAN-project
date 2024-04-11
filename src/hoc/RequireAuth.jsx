import { useLocation, Navigate } from 'react-router-dom';
import AuthStore from '../store/Store';
import { observer } from 'mobx-react';

function RequireAuth({ children }) {
    const location = useLocation();

    if (AuthStore.isAuthInProgress) {
        return <div>Wait for auth ...</div>;
    }
    if (!AuthStore.isAuth) {
        return <Navigate to='/login' state={{ from: location }} />;
    }

    return children;
}

export default observer(RequireAuth);

// import { useLocation, Navigate } from 'react-router-dom';
// import { useAuth } from '../hook/useAuth';

// function RequireAuth({ children }) {
//     const location = useLocation();
//     const { user } = useAuth();

//     if (!user) {
//         return <Navigate to='/login' state={{ from: location }} />;
//     }

//     return children;
// }

// export default RequireAuth;
