import React, {useContext, useRef, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import './Pages.css'
import {Pagination} from "react-bootstrap";
import {createPages} from "./pagesCreator";

const Pages = observer(() => {
    const {product} = useContext(Context)
    const pageCount = Math.ceil(product.totalCount / product.limit)
    const pages = []
    const [count, setCount] = useState();
    createPages(pages, pageCount, product.page)

    let smaller = "<<"
    let action = (page) => {
        product.setPage(page)
        window.scrollTo(0,80)
    }

    return (
        <Pagination className="pag_page">
        <Pagination.First className={'pagination1'} onClick={()=> action(1)}>
            {smaller}
        </Pagination.First>
            {
                pages.map(page =>
                    <Pagination.Item
                        className={'pagination1'}
                        key={page}
                        active={product.page === page}
                       // onClick={() => product.setPage(page)}
                        onClick={() => action(page)}
                    >
                    {page}
                    </Pagination.Item>
                )}

            <Pagination.Last className={'pagination1'} onClick={()=>{action(pageCount)}} >>></Pagination.Last>
            <p>{count}</p>
        </Pagination>
    );
});

export default Pages;


