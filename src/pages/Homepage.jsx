import React from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import '../styles/Homepage.css';
import mainImage1 from '../img/img1.svg';
import mainImage2 from '../img/img2.svg';
import headerTarif1 from '../img/headerTarif1.svg';
import headerTarif2 from '../img/headerTarif2.svg';
import headerTarif3 from '../img/headerTarif3.svg';
import Slider from '../components/Slider/Slider.jsx';
import AuthStore from '../store/Store';

function Homepage() {
    const isAuth = AuthStore.isAuth;
    var frameBodyCurrentConst = '';
    var frameBodyPriceTextClass = '';
    var frameTarifClass = '';
    var frameButton = '';

    if (isAuth) {
        frameBodyCurrentConst = (
            <dir className='frameBodyCurrentLine'>
                <dir className='frameBodyCurrent'>Текущий тариф</dir>
            </dir>
        );
        frameBodyPriceTextClass = 'frameBodyPriceText';
        frameTarifClass = 'frameTarif';
        frameButton = (
            <button className='frameButtom'>Перейти в личный кабинет</button>
        );
    } else {
        frameBodyCurrentConst = '';
        frameBodyPriceTextClass = 'frameBodyPriceText2';
        frameTarifClass = 'frameTarif2';
        frameButton = <button className='frameButtomBlue'>Подробнее</button>;
    }

    return (
        <div>
            <div className='container01'>
                <div className='textFrame'>
                    <p className='textService'>
                        сервис по поиску <br />
                        публикаций <br />
                        о компании <br />
                        по его ИНН
                    </p>
                    <p className='textConplex'>
                        Комплексный анализ публикаций, получение данных в
                        формате PDF на электронную почту.
                    </p>
                    <Link to='/requestdata'>
                        <button className='buttonReq'>Запросить данные</button>
                    </Link>
                </div>
                <img className='mainImage1' src={mainImage1} alt='MainImage1' />
            </div>
            <p className='textWhyWe'>Почему именно мы</p>
            <Slider />
            <img className='mainImage2' src={mainImage2} alt='mainImage2' />
            <p className='textWhyWe'>наши тарифы</p>
            <div className='tarifsConteiner'>
                <div className='mainTarif'>
                    <div className={frameTarifClass}>
                        <div className='frameHeader'>
                            <div>
                                <p className='frameHeaderTitle'>Beginner</p>
                                <p className='frameHeaderText'>
                                    Для небольшого исследования
                                </p>
                            </div>
                            <img
                                className='frameHeaderImg'
                                src={headerTarif1}
                                alt='headerTarif1'
                            />
                        </div>
                        <div className='frameBodyPrice'>
                            {frameBodyCurrentConst}

                            <div className={frameBodyPriceTextClass}>
                                <p>799 ₽</p>
                                <p className='frameBodyPriceDiscount'>
                                    1 200 ₽
                                </p>
                            </div>
                            <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                            <p className='frameBodyInTarif'>В тариф входит:</p>
                            <ul>
                                <li>Безлимитная история запросов</li>
                                <li>Безопасная сделка</li>
                                <li>Поддержка 24/7</li>
                            </ul>
                        </div>
                        {frameButton}
                    </div>

                    <div className='frameTarif2'>
                        <div className='frameHeader2'>
                            <div>
                                <p className='frameHeaderTitle'>Pro</p>
                                <p className='frameHeaderText'>
                                    Для HR и фрилансеров
                                </p>
                            </div>
                            <img
                                className='frameHeaderImg2'
                                src={headerTarif2}
                                alt='headerTarif2'
                            />
                        </div>
                        <div className='frameBodyPrice'>
                            <div className='frameBodyPriceText2'>
                                <p>1 299 ₽</p>
                                <p className='frameBodyPriceDiscount'>
                                    2 600 ₽
                                </p>
                            </div>
                            <p>или 279 ₽/мес. при рассрочке на 24 мес.</p>
                            <p className='frameBodyInTarif'>В тариф входит:</p>
                            <ul>
                                <li>Все пункты тарифа Beginner</li>
                                <li>Экспорт истории</li>
                                <li>Рекомендации по приоритетам</li>
                            </ul>
                        </div>
                        <button className='frameButtomBlue'>Подробнее</button>
                    </div>

                    <div className='frameTarif2'>
                        <div className='frameHeader3'>
                            <div>
                                <p className='frameHeaderTitle'>Business</p>
                                <p className='frameHeaderText'>
                                    Для корпоративных клиентов
                                </p>
                            </div>
                            <img
                                className='frameHeaderImg3'
                                src={headerTarif3}
                                alt='headerTarif3'
                            />
                        </div>
                        <div className='frameBodyPrice'>
                            <div className='frameBodyPriceText2'>
                                <p>2 379 ₽</p>
                                <p className='frameBodyPriceDiscount'>
                                    3 700 ₽
                                </p>
                            </div>

                            <p className='frameBodyInTarif3'>В тариф входит:</p>
                            <ul>
                                <li>Все пункты тарифа Pro</li>
                                <li>Безлимитное количество запросов</li>
                                <li>Приоритетная поддержка</li>
                            </ul>
                        </div>
                        <button className='frameButtomBlue'>Подробнее</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default observer(Homepage);
