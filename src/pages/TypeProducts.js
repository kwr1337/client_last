import React, {useContext, useEffect} from 'react';
import TypeBar from "../components/TypeBar";
import {Context} from "../index";
import {fetchProducts, fetchTypes} from "../http/productApi";
import {observer} from "mobx-react-lite";

const TypeProducts = observer(() => {
    const {product} = useContext(Context)
    useEffect(()=>{
        fetchTypes().then(data => product.setTypes(data))
        fetchProducts().then(data => product.setProducts(data))
    }, [])

    return (
        <div>
            Меню с тиипами товароы
            <TypeBar  />
        </div>
    );
});

export default TypeProducts;