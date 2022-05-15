import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {fetchMail, fetchOneProduct} from "../http/productApi";
import './ProductPage.css'
import Modal from './Modal'
import {AiOutlineCheck} from "react-icons/ai";
import {BiErrorAlt} from "react-icons/bi";
import Footer from "../components/Footer";
// import {IoClose} from 'react/react-icon/io'

const ProductPage = () => {
    const [product, setProduct] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [])


    const [name, SetName] = useState('');
    const [tel, SetTel] = useState('');
    const [modal, setModal] = useState({
        modal: false,
        modal_val: false,
        modal_error: false,
        modal_success: false,
    })

    let call = () => {
        if (name.length > 2 && tel.length >= 10) {
            fetchMail(name, tel, []).then(data => {
                if (data.status === 'success') {
                    setModal({...modal, modal_success: true})
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
            <div className="cran _container">
                <div className="product-description">
                    <h1>{product.name}</h1>
                </div>
                <main className="card_con">
                    <div className="left-column">
                        <div className={'card__image'}>
                            <img src={process.env.REACT_APP_API_URL + product.img}/>
                        </div>
                        <h1 className="product-des">Описание</h1>
                        <p>{product.des}</p>
                    </div>
                    <div className="right-column">

                        <div className="product-configuration">
                            <div className="product-color">
                                <h1>Размеры:</h1>
                                <span className="hz">
                                <div style={{width: 203}}>{product.size}</div>
                            </span>
                                <span className="hz">
                                <div style={{width: 232}}>{product.size2}</div>
                            </span>
                                <span className="hz">
                                <div style={{width: 253}}>{product.size3}</div>
                            </span>
                                <span className="hz">
                                <div style={{width: 250}}>{product.size4}</div>
                            </span>
                            </div>
                        </div>
                        <div className="product-price">
                            <button className={"cart-btn"}
                                    onClick={()=>setModal({...modal,modal:true})}
                            >Отправить заявку
                            </button>
                            {/*<a href="#" className="cart-btn">Add to cart</a>*/}
                        </div>
                    </div>
                </main>
            </div>
            <Footer />
            <Modal
                title={'Заявка'}
                isOpened={modal.modal}
                onModalClose={() =>  setModal({...modal,modal: false})}
            >

                <div className={"modal__container"}>
                    <div className="data__zayavka_md">
                        <input autoComplete="off" type="text" name="user_name" placeholder="Имя" className="data__zayavka__input_md" id="formName" onChange={event => SetName(event.target.value)} />
                        <input autoComplete="off" type="tel" name="user_email" placeholder="Телефон" className="data__zayavka__input_md" id="formEmail"  onChange={event => SetTel(event.target.value)}/>
                        <button type="submit" className="data__zayavka__button_md" onClick={() => call()}>Отправить</button>
                        <p id="map" className="data__zayavka__text_md">*Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.</p>
                    </div>
                </div>

            </Modal>
            {/*----------------------------------Окно Успеха-------------------------------------*/}
            <Modal
                title={'Заявка'}
                isOpened={modal.modal_success}
                onModalClose={() =>  setModal({...modal,modal_success: false})}
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

export default ProductPage;