import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchProducts, fetchTypes} from "../http/productApi";
import ProductItem from "../components/ProductItem";
import Footer from "../components/Footer";
import TypeBar from "../components/TypeBar";
import Pages from "../components/Pages";

const InternetShop = observer(() => {
        const {product} = useContext(Context)

        useEffect(() => {
            fetchTypes().then(data => product.setTypes(data))
            fetchProducts(null, null, 1, 12).then(data => {
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


        return (
            <div>
                <div className="_container">
                    <div className="products_in">
                        <div className="text__title1">
                            Интернет товары
                        </div>
                        <div className="tovary_in">
                            {product.types.map((type) => {
                                    if (29 === type.id) {
                                        product.setSelectedType(type)
                                    }
                                })
                            }
                            {product.products.map(product => <ProductItem key={product.id} product={product}/>)}
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
    }
)

export default InternetShop;