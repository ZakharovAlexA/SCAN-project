import { createContext, useState } from 'react';
import AuthStore from '../store/Store';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');

    // Фунция для входа пользователя
    const signin = (newUser, newPassword, callback) => {
        AuthStore.login(newUser, newPassword);
        setUser({ newUser });
        callback();
    };
    // Фунция для выхода авторизованного пользователя
    const signout = () => {
        AuthStore.logout();
    };

    const value = { user, signin, signout };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};
