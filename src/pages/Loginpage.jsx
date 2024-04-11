import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../hook/useAuth';
import '../styles/Loginpage.css';

import LoginImgFacebook from '../img/loginImgFacebook.svg';
import LoginImgGoogle from '../img/loginImgGoogle.svg';
import LoginImgYandex from '../img/loginImgYandex.svg';
import LoginImgKey from '../img/loginImgKey.svg';
import LoginImglock from '../img/loginImglock.svg';

function Loginpage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { signin } = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({
        mode: 'onBlur',
    });

    const onSubmit = (event) => {
        const user = event.username;
        const passw = event.password;
        signin(user, passw, () => navigate(fromPage, { replace: true }));
    };

    return (
        <div className='loginContainer'>
            <div className='loginTextContainer'>
                <p>
                    Для оформления подписки на тариф, необходимо авторизоваться.
                </p>
                <img src={LoginImgKey} alt='LoginImgKey' />
            </div>
            <div className='loginKeyContainer'>
                <img src={LoginImglock} alt='LoginImglock' />
            </div>
            <div className='formContainer'>
                <div className='formTopLine'>
                    <div className='formLinkIn'>Войти</div>
                    <div className='formLinkReg'>Зарегистрироваться</div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='formBase'>
                    <div className='formLine'>
                        <label>Логин или номер телефона:</label>
                        <input
                            className={
                                errors.username
                                    ? 'formLineInputError'
                                    : 'formLineInput'
                            }
                            {...register('username', {
                                required: true,
                                pattern: /^([a-zA-Z0-9_]+)|([+]7+\d{10})$/,
                            })}
                        />
                        <div className='errorMassege'>
                            {errors.username?.type === 'required' &&
                                'Поле не может быть пустым'}
                            {errors.username?.type === 'pattern' &&
                                'Введите корректные данные'}
                        </div>
                    </div>
                    <div className='formLine'>
                        <label>Пароль:</label>
                        <input
                            className={
                                errors.password
                                    ? 'formLineInputError'
                                    : 'formLineInput'
                            }
                            type='password'
                            {...register('password', {
                                required: true,
                            })}
                        />

                        <div className='errorMassege'>
                            {errors.password?.type === 'required' &&
                                'Неправильный пароль'}
                        </div>
                    </div>
                    <button
                        type='submit'
                        className={
                            isValid
                                ? 'loginFormButton'
                                : 'loginFormButton loginFormButtonDisabled '
                        }
                        disabled={!isValid}
                    >
                        Войти
                    </button>
                    <div className='formLink'>
                        <a href='#'>Восстановить пароль</a>
                    </div>
                    <div className='formContainerInVia'>
                        <p>Войти через:</p>
                        <div className='formInVia'>
                            <div>
                                <img
                                    src={LoginImgGoogle}
                                    alt='LoginImgGoogle'
                                />
                            </div>
                            <div>
                                <img
                                    src={LoginImgFacebook}
                                    alt='LoginImgFacebook'
                                />
                            </div>
                            <div>
                                <img
                                    src={LoginImgYandex}
                                    alt='LoginImgYandex'
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Loginpage;
