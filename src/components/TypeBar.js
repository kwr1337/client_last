import React, {useContext} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Select from "react-select";



const TypeBar = observer(() => {
    const {product} = useContext(Context)
    const {options} = product.types;




    let formatOptions = (options = []) => {
        return product.types.map(option => {
            return {value: option.name, label: option.name};
        });
    };


    let onChange = (value) => {
        console.log(value)
        product.types.map((type) => {
            console.log("type" + type.name)
            if (value.value === type.name) {
                product.setSelectedProduct(null)
                product.setSelectedType(type)
            }
        })
    }

    return (
        <div>
            <Select
                // menuIsOpen
                classNamePrefix="react-select"
                options={formatOptions(options)}
                expanded='true'
                onChange={onChange}
                // defaultMenuIsOpen
                placeholder={"Продукция"}

            />

            {/*{product.types.map(type=>*/}
            {/*    <div className="filter__button" > <a*/}
            {/*       style={{cursor: 'pointer'}}*/}
            {/*       active={type.id === product.selectedType.id}*/}
            {/*       key={type.id}*/}
            {/*       onClick={()=> product.setSelectedType(type)}>*/}
            {/*        {type.name}*/}
            {/*    </a>*/}
            {/*    </div>*/}
            {/*)}*/}

            {/*{product.types.map(type=>*/}
            {/*    options.value.push(type.id === product.selectedType.id)*/}
            {/*    )}*/}
        </div>
    );
});

export default TypeBar;