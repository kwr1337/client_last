import {makeAutoObservable} from "mobx";

export default class ProductStore {
    constructor() {
        this._types = []
        this._products = []
        this._selectedType = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 12
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setProducts(products) {
        this._products = products
    }

    setPage(page) {
        this._page = page
    }

    setTotalCount(count) {
        this._totalCount = count
    }

    setSelectedType(type) {
        this.setPage(1)
        this._selectedType = type
    }

    get types() {
        return this._types
    }

    get products() {
        return this._products
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }

    get selectedType() {
        return this._selectedType
    }



}