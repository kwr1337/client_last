import React, {useContext, useEffect, useState} from 'react';
import Pages from "../components/Pages";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchProducts, fetchTypes} from "../http/productApi";
import TypeBar from "../components/TypeBar";
import './Shop.css'
import Footer from "../components/Footer";
import ProductItem from "../components/ProductItem.js"

const Shop = observer(() => {
    const {product} = useContext(Context)


    useEffect(() => {
        fetchTypes().then(data => product.setTypes(data))
        fetchProducts(null, null, 12).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchProducts(product.selectedType.id, product.page, 12).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [product.page, product.selectedType])

    const [searchTerm, setSerchTerm] = useState('')

    return (
        <div>
            <div className="_container__fil">
                <div className="products">
                    <a href={'/products'} className='filter__button'>Все продукты</a>
                    <div className="input__class">
                        {/*<input className="input__pro"*/}
                        {/*       placeholder="Поиск..."*/}
                        {/*       onChange={event => {*/}
                        {/*           setSerchTerm(event.target.value)*/}
                        {/*       }}*/}
                        {/*/>*/}
                    </div>
                    <div className="fil">
                        <TypeBar/>
                    </div>

                    <div className="tovary">
                        {product.products.filter((val) => {
                            if(searchTerm === ""){
                                return val;
                            }else if(val.name.toLowerCase().includes((searchTerm.toLowerCase()))){
                                return val
                            }
                        }).map(product =>
                            <ProductItem key={product.id} product={product}/>
                        )}
                    </div>
                    <div></div>
                    <div className="popusk_vrem">
                        <Pages/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Shop;