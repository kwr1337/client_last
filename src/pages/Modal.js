import React from 'react';
import './madal.css'
import {CgClose} from 'react-icons/cg'

const Modal = (props) => {

    return (
        <div className={`modal__wrapper ${props.isOpened ? 'open' : 'close'}`} style={{...props.style}}>
            <div className={'modal__body'}>
                <div className="modal_flex">
                    <div className={'modal__close'}
                         onClick={props.onModalClose}
                    >
                        <CgClose/>
                    </div>
                    <h2>{props.title}</h2>
                </div>
                <hr/>
                {props.children}
            </div>
        </div>
    );
};

export default Modal;