import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from 'react-router-dom';

import './styles/App.css';
import Homepage from './pages/Homepage';
import Rates from './pages/Rates';
import FAQ from './pages/FAQ';
import Notfoundpage from './pages/Notfoundpage';
import Layout from './components/Layout';
import LoginPage from './pages/Loginpage';
import RequestData from './pages/Requestdata';
import Resultpage from './pages/Resultpage';
import RequireAuth from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path='login' element={<LoginPage />} />
            <Route
                path='requestdata'
                element={
                    <RequireAuth>
                        <RequestData />
                    </RequireAuth>
                }
            />
            <Route
                path='resultpage'
                element={
                    <RequireAuth>
                        <Resultpage />
                    </RequireAuth>
                }
            />
            <Route path='rates' element={<Rates />} />
            <Route path='faq' element={<FAQ />} />
            <Route path='*' element={<Notfoundpage />} />
        </Route>
    )
);

function App() {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;
