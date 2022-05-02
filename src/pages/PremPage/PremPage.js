import React from 'react'
import './PremPage.css'
import steel from '../../img/prem_img/steel.png'
import svarshik from '../../img/prem_img/svarshik.png'
import bolt from '../../img/prem_img/bolt.png'
import nakovlnia from '../../img/prem_img/nakovlnia.png'



const PremPage = (props) => {
    return (
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
                        <div className="item__text">
                            ОПЫТ ГОСУДАРСТВЕННЫХ ОБОРОННЫХ ПРОЕКТОВ
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PremPage;