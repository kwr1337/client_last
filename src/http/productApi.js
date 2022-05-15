import {$host} from "./index";
import FormData from 'form-data'

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

export const fetchMail = async (name1, tel1,file1) => {
    let form = new FormData()
    form.append('name', name1)
    form.append('tel',tel1)

    if(file1.length !== 0){
    form.append('file', file1[0])
        }

    const {data} = await $host({
        method: 'post',
        url: 'api/access',
        data: form,
        headers: { "Content-Type": "multipart/form-data" }
    })
    return data
}