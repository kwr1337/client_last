import {Anchor} from "antd";

const {Link} = Anchor

const Burger = (props) => {
    return (
        <Anchor affix={false} targetOffset={0}>
            <ul className="menu__list">
                <li className="menu__item" onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link href="/#main" title={'Главная'}/>
                </li>
                <li className="menu__item" onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link href="/products" title={'Металлоизделия для ЛЭП'}/>
                </li>
                <li className="menu__item" onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link href="/products-internet" title={'Крепления и кронштейны для связи , ВОЛС'}/>
                </li>
                <li className="menu__item" onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link href="/#zaiavka" title={'Заявка'}/>
                </li>
                <li className="menu__item" onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link href="/#map" title={'О нас'}/>
                </li>
            </ul>
        </Anchor>
    );
}
export default Burger;