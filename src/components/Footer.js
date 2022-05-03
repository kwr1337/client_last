import React from 'react'
import './Footer.css'
import logo from '../img/logo.png'
import {Anchor} from "antd";
// import {AiOutlineFacebook} from "react-icons/ai"
// import {AiOutlineInstagram} from 'react-icons/ai'
// import {BiAt} from 'react-icons/bi'
// import {FaTelegramPlane} from 'react-icons/fa'
const {Link} = Anchor




const Footer = () => {
    return (
        <Anchor affix={false} targetOffset={0}>
        <div className="full__footer">
            <footer className="footer__container">
                <div className='footer__column'>
                    <Link href={'/#main'} title={<img src={logo} />} />
                </div>

                <div>
                    <div className='footer__column'>
                        Адрес: г.Чистополь, ул.Пушкина, 133
                    </div>
                    <div>
                        Телефоны: 8 (812) 123-45-67 ||
                        8 (987) 418-67-41
                    </div>
                </div>
                <div>
                    <div className='footer__column'>
                        <div>
                            Отдел продаж: 8:00 - 20:00
                        </div>
                        <div>
                            E-mail: specmetallofficial@gmail.com
                        </div >
                        {/*<AiOutlineFacebook size={"30px"} />*/}
                        {/*<AiOutlineInstagram size={"30px"} />*/}
                        {/*<BiAt size={"30px"} />*/}
                        {/*<FaTelegramPlane size={"30px"} />*/}
                    </div>
                </div>
            </footer>
        </div>
        </Anchor>
    )
}
export default Footer