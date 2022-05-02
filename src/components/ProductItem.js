import React from 'react';
import {useHistory} from "react-router-dom/cjs/react-router-dom";
import {ProductPage_Rout} from "../utils/consts";
import './ProductItem.css'

const ProductItem = ({product}) => {
    const history = useHistory()
    return (
        <div className="prod _container">
            <div className="gallery">
                <div className="content">
                    <img className="img_pro" src={process.env.REACT_APP_API_URL + product.img}/>
                    <div className="content_ras">
                        <div className="title_con" >
                            <h3 className="title">{product.name}</h3>
                        </div>
                        <div className="but_con">
                            <button type="submit" className="buy" onClick={() => history.push(ProductPage_Rout + '/' + product.id)}>Просмотр</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;