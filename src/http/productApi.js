import {$host} from "./index";

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const fetchProducts = async (name,typeId, page, limit= 12) => {
    const {data} = await $host.get('api/product', {params: {
            name,typeId, page, limit
        }})
    return data
}

export const fetchOneProduct = async (id) => {
    const {data} = await $host.get('api/product/' + id)
    return data
}

export const fetchMail = async (name1, tel1) => {
    const {data} = await $host.post('api/access', {name:name1, tel: tel1})
    console.log('api/access', {params: {name1, tel1}})
    console.log(data)
    return data
}