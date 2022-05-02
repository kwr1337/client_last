import React, {useEffect, useState} from 'react'
import './Header.css'
import logo from '../img/logo.png'
import {Anchor} from "antd";
import {CgMenu} from "react-icons/cg"
import {CgClose} from "react-icons/cg"
import Burger from "./burger";

const {Link} = Anchor

const Header = () => {

    const [small, setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.pageYOffset > 50)
            );
        }
    }, []);

    const [open, setOpen] = useState(false)

    const humburgerIcon = <CgMenu className={'Humberger'}
                                       size='40px' color='white'
                                       onClick={() => setOpen(!open)}
    />

    const closeIcon = <CgClose className={'Humberger'}
                                size='40px' color='white'
                                onClick={() => setOpen(!open)}
    />

    const closeMobileMenu = () => setOpen(false);
    return (
        <Anchor affix={false} targetOffset={0}>
            <div className={`header ${
                small ? "small" : "header__red"
            }`}>
                <div className="header__container _container">
                    <Link href="/#main" className="header__logo" title={ <img src={logo} />}>

                    </Link>
                    <nav className="header__menu menu">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <Link href="/#main" title={'Главная'}/>
                            </li>
                            <li className="menu__item">
                                <Link href="/products" title={'Продукты для ЛЭП'}/>
                            </li>
                            <li className="menu__item">
                                <Link href="/products-internet" title={'Продукты для Интернета'}/>
                            </li>
                            <li className="menu__item">
                                <Link href="/#zaiavka" title={'Заявка'}/>
                            </li>
                            <li className="menu__item">
                                <Link href="/#map" title={'О нас'}/>
                            </li>
                        </ul>
                    </nav>

                    {/*-------------------------------Бургер-меню---------------------------------------*/}
                    <div className="navbar">
                        <nav className="mobile__header__menu menu">
                            {open ? closeIcon : humburgerIcon}
                            {open && <Burger isMobile={true} closeMobileMenu={closeMobileMenu} />}
                        </nav>
                    </div>
                </div>
            </div>
        </Anchor>
    );
}
export default Header;