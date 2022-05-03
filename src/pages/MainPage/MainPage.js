import React, {useEffect, useState} from 'react';
import './MainPage.css'
import main_img from '../../img/Main_img.jpg'
import tel_img from '../../img/tel.png'
import metka_img from '../../img/metka.png'
import steel from '../../img/prem_img/steel.png'
import svarshik from '../../img/prem_img/svarshik.png'
import bolt from '../../img/prem_img/bolt.png'
import nakovlnia from '../../img/prem_img/nakovlnia.png'

import f_1 from '../../img/raboty_img/1.jpg'
import f_2 from '../../img/raboty_img/2.jpg'
import f_3 from '../../img/raboty_img/3.jpg'
import f_4 from '../../img/raboty_img/4.jpg'
import f_5 from '../../img/raboty_img/5.jpg'
import f_6 from '../../img/raboty_img/6.jpg'
import f_7 from '../../img/raboty_img/7.jpg'
import f_8 from '../../img/raboty_img/8.jpg'

import f_9 from '../../img/raboty_img/9.jpg'
import f_10 from '../../img/raboty_img/10.jpg'
import f_11 from '../../img/raboty_img/11.jpg'
import f_12 from '../../img/raboty_img/12.jpg'
import f_13 from '../../img/raboty_img/13.jpg'
import f_14 from '../../img/raboty_img/14.jpg'
import f_15 from '../../img/raboty_img/15.jpg'
import f_16 from '../../img/raboty_img/16.jpg'

import f_17 from '../../img/raboty_img/17.jpg'
import f_18 from '../../img/raboty_img/18.jpg'
import f_19 from '../../img/raboty_img/19.jpg'
import f_20 from '../../img/raboty_img/21.jpg'
import f_21 from '../../img/raboty_img/22.jpg'
import f_22 from '../../img/raboty_img/23.jpg'
import f_23 from '../../img/raboty_img/24.jpg'
import f_24 from '../../img/raboty_img/25.jpg'

import f_25 from '../../img/raboty_img/25.jpg'
import f_26 from '../../img/raboty_img/26.jpg'
import f_27 from '../../img/raboty_img/27.jpg'
import f_28 from '../../img/raboty_img/28.jpg'
import f_29 from '../../img/raboty_img/29.jpg'
import f_30 from '../../img/raboty_img/30.jpg'
import f_31 from '../../img/raboty_img/31.jpg'
import f_32 from '../../img/raboty_img/32.jpg'


import '../PremPage/PremPage.css'
import '../RabPage/RabPage.css'
import "../ZayavkaPage/ZayavkaPage.css";
import "../MapPage/MapPage.css";
import "../../components/Footer.css";
import Footer from "../../components/Footer";
import {fetchMail} from "../../http/productApi";
import Modal from "../Modal";
import {AiOutlineCheck} from 'react-icons/ai'
import {BiErrorAlt} from 'react-icons/bi'
const MainPage = () => {


    const [name, SetName] = useState('');
    const [tel, SetTel] = useState('');
    const [modal, setModal] = useState({
        modal: false,
        modal_val: false,
        modal_error: false,
    })

    let call = () => {
        if (name.length > 2 && tel.length >= 10) {
            fetchMail(name, tel).then(data => {
                if (data.status === 'success') {
                    setModal({...modal, modal: true})
                } else {
                    setModal({...modal, modal_error: true})
                }
            })
        }
        else{
            setModal({...modal, modal_val: true})
        }
    }

    return (
        <div>
            <div className="page" id="main">
                <div className="page__main-block main-block">
                    <div className="main-block__container _container">
                        <div className="main-block__body">
                            <div>
                                <h1 className="main-block__title">"СпецМеталл"<br/>завод металлоконструкций для лэп
                                </h1>
                            </div>
                            <div>
                                <div className="main-block__text">
                                    <div className="main-block__text__img">
                                        <img src={metka_img}/><p>г.Чистополь, ул.Пушкина, 133</p>
                                    </div>
                                    <div className="main-block__text__img">
                                        <img src={tel_img}/><p>8 (922) 030-00-07 <br/> 8 (987) 418-67-41</p> <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-block__image _ibg">
                        <img src={main_img} alt="dad"/>
                        <div className="lox"></div>
                    </div>
                </div>
            </div>

            <div className="page">
                <div className="prem__container _container">
                    <div className="prem__body">
                        <div className="body__item">
                            <div className="body__img">
                                <img src={steel}/>
                            </div>
                            <div className="item__text">
                                СОБСТВЕННОЕ ПРОИЗВОДСТВО
                            </div>
                        </div>
                        <div className="body__item">
                            <div className="body__img">
                                <img src={nakovlnia}/>
                            </div>
                            <div className="item__text">
                                ИНДИВИДУАЛЬНЫЙ ПОДХОД В РАМКАХ ПРОЕКТА
                            </div>
                        </div>
                        <div className="body__item">
                            <div className="body__img">
                                <img src={bolt}/>
                            </div>
                            <div className="item__text">
                                ДЕМОКРАТИЧНАЯ ЦЕНА
                            </div>
                        </div>
                        <div className="body__item">
                            <div className="body__img">
                                <img src={svarshik}/>
                            </div>
                            <div className="item__text" id="zaiavka">
                                ОПЫТ ГОСУДАРСТВЕННЫХ ОБОРОННЫХ ПРОЕКТОВ
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page2">
                <div className="rabota__container _container">
                    <div className="text__title">
                        Наши клиенты
                    </div>
                    <div className={"sercices__container"}>
                        <div className="services__body">
                            <div className="services__column">
                                <div className="services__item">
                                    <img src={f_1} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_2} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_3} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_4} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_5} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_6} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_7} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_8} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_9} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_10} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_11} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_12} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_13} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_14} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_15} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_16} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_17} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_18} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_19} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_20} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_21} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_22} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_23} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_24} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_25} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_26} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_27} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_28} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_29} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_30} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_31} alt="" className="services__img"/>
                                </div>
                                <div className="services__item">
                                    <img src={f_32} alt="" className="services__img"/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page1">
                <div className="zayavkapage__container _container">
                    <div className="text__title1">
                        Хотите закзать?
                    </div>
                    <div className="zayvka__body">
                        <div className="zayavka__text">
                            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum
                            является
                            стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный
                            печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для
                            распечатки
                            образцов.
                        </div>
                        <div className="data__zayavka">
                            <input autoComplete="off" type="text" placeholder="Имя" className="data__zayavka__input"
                                   onChange={event => SetName(event.target.value)}/>
                            <input autoComplete="off" type="tel" placeholder="Телефон" className="data__zayavka__input"
                                   onChange={event => SetTel(event.target.value)}/>
                            <p id="map" className="data__zayavka__text">*Мы никому не передаем ваши данные. И не
                                сохраняем ваш номер в базу.</p>
                            <button type="submit" className="data__zayavka__button"
                                    onClick={() => call()}>Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page">
                <div className="map__container _container">
                    <div className="text__title1">
                        Мы находимся
                    </div>
                    <div className="map">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A74a6f4ea17319a0cbb41e283494d3d53a29951957a8e2a26479154565accacce&amp;source=constructor"
                            width="100%" height="400" frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
            <Footer/>
            {/*----------------------------------Окно Успеха-------------------------------------*/}
            <Modal
                title={'Заявка'}
                isOpened={modal.modal}
                onModalClose={() =>  setModal({...modal,modal: false})}
            >
                <div className={"modal__container"}>
                    <div className="data__zayavka_md">
                        <AiOutlineCheck size={'140px'} className={'data__zayavka_md_error'}/>
                        <h1>Отправлена успешно!</h1>
                    </div>
                </div>
            </Modal>

            {/*----------------------------------Окно валидации-------------------------------------*/}
            <Modal
                title={'Ошибка'}
                isOpened={modal.modal_val}
                onModalClose={() =>  setModal({...modal,modal_val: false})}
            >
                <div className={"modal__container"}>
                    <div className="data__zayavka_md">
                        <BiErrorAlt size={'140px'} className={'data__zayavka_md_error'}/>
                        <h1>Некорректно введены поля</h1>
                    </div>
                </div>
            </Modal>

            {/*----------------------------------Окно Ошибок-------------------------------------*/}
            <Modal
                title={'Ошибка'}
                isOpened={modal.modal_error}
                onModalClose={() =>  setModal({...modal,modal_error: false})}
            >
                <div className={"modal__container"}>
                    <div className="data__zayavka_md">
                        <BiErrorAlt size={'140px'} className={'data__zayavka_md_error'}/>
                        <h1>Повторите попытку позже...</h1>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default MainPage;