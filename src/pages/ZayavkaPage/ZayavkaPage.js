import React from 'react'
import './ZayavkaPage.css'
import Message from '../../../../server/mailer/Messager'

const ZayavkaPage = (props) => {
    return (
        <div className="page">
            <div className="zayavkapage__container _container">
                <div className="text__title">
                    Хотите закзать?
                </div>
                <div className="zayvka__body">
                    <div className="zayavka__text">
                        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                        стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный
                        печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки
                        образцов.
                    </div>
                    <div className="data__zayavka">
                        <input autoComplete="off" type="text" name="user_name" placeholder="Имя" className="data__zayavka__input" id="formName"/>
                        <input autoComplete="off" type="email" name="user_email" placeholder="Email" className="data__zayavka__input" id="formEmail"/>
                        <p className="data__zayavka__text">*Мы никому не передаем ваши данные. И не сохраняем ваш номер в базу.</p>
                        <button type="submit" className="data__zayavka__button" onClick={Message()} >Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ZayavkaPage;