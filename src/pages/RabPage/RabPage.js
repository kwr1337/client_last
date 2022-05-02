import React from 'react'
import './RabPage.css'
import i from '../../img/raboty_img/i.jpg'
import iscra from '../../img/raboty_img/iscra.png'
import klass from '../../img/raboty_img/kalss.png'
import provoda from '../../img/raboty_img/provoda.jpg'



const RabotyPage = (props) => {
    return (
        <div className="page">
            <div className="rabota__container _container">
                <div className="text__title">
                    Рабочий процесс
                </div>
                {/*<div className="rabota__body">*/}
                {/*    /!*<div className="raboty__column"></div>*!/*/}
                {/*    <div className="rabota__item">*/}
                {/*        <div className="text__block">ТУТ ТЕКСТ</div>*/}
                {/*        <div className="img__block"><img src={provoda}/></div>*/}
                {/*    </div>*/}
                {/*    <div className="rabota__item">*/}
                {/*        <div className="text__block">ТУТ ТЕКСТ</div>*/}
                {/*        <div className="img__block"><img src={provoda}/></div>*/}
                {/*    </div>*/}
                {/*    <div className="rabota__item">*/}
                {/*        <div className="text__block">ТУТ ТЕКСТ</div>*/}
                {/*        <div className="img__block"><img src={provoda}/></div>*/}
                {/*    </div>*/}
                {/*    <div className="rabota__item">*/}
                {/*        <div className="text__block">ТУТ ТЕКСТ</div>*/}
                {/*        <div className="img__block"><img src={provoda}/></div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div>
                    <div className="services__body">
                        <div className="services__column">
                            <div className="services__item item-service">
                                {/*<div className="img__block"></div>*/}
                                <h3 className="item-service__title">ТУТ ТЕКСТ</h3>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item item-service">
                                {/*<div className="img__block"><img src={provoda}/></div>*/}
                                <h3 className="item-service__title">ТУТ ТЕКСТ</h3>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item item-service">
                                {/*<div className="img__block"><img src={provoda}/></div>*/}
                                <h3 className="item-service__title" id="zaiavka">ТУТ ТЕКСТ</h3>
                            </div>
                        </div>
                        <div className="services__column">
                            <div className="services__item item-service">
                                {/*<div className="img__block"><img src={provoda}/></div>*/}
                                <h3 className="item-service__title" id="map" >ТУТ ТЕКСТ</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RabotyPage;