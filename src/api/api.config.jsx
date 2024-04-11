import axios from 'axios';

const BASE_URL = 'https://gateway.scan-interfax.ru';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// создаем перехватчик запросов
// который к каждому запросу добавляет accessToken из localStorage
instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

// создаем перехватчик ответов
// который в случае невалидного accessToken попытается его обновить
instance.interceptors.response.use(
    // в случае валидного accessToken ничего не делаем:
    (config) => {
        return config;
    },
    // в случае просроченного accessToken выводим ошибку в консоль:
    async (error) => {
        console.log('AUTH ERROR');
        // пробросим эту ошибку
        throw error;
    }
);

export { instance };
