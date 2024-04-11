import { makeAutoObservable } from 'mobx';

class AuthStore {
    isAuth = false;
    isAuthInProgress = false;
    baseURL = 'https://gateway.scan-interfax.ru';

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    async login(username, password) {
        this.isAuthInProgress = true;
        try {
            const response = await fetch(
                this.baseURL + '/api/v1/account/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        login: username,
                        password: password,
                    }),
                }
            );

            if (response.ok) {
                const data = await response.json();
                const accessToken = data.accessToken;
                const expireToken = data.expire;
                localStorage.setItem('token', data.accessToken);
                this.setAuth(true);
                console.log(
                    'Login successful. Access Token:',
                    accessToken,
                    'Token expire:',
                    expireToken
                );
            } else {
                console.error('Login failed');
            }
        } catch (error) {
            console.error('Error during login:', error);
        } finally {
            this.isAuthInProgress = false;
        }
    }

    async logout() {
        this.isAuthInProgress = true;
        try {
            this.isAuth = false;
            localStorage.removeItem('token');
        } catch (err) {
            console.log('logout error');
        } finally {
            this.isAuthInProgress = false;
        }
    }
}

export default new AuthStore();
