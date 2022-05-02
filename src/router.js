import {InternetShop_Rout, MainPage_Rout, ProductPage_Rout, Shop_Rout,} from "./utils/consts";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import MainPage from "./pages/MainPage/MainPage";
import InternetShop from './pages/InternetShop'

export const publicRouters = [

    {
        path: MainPage_Rout,
        Component: MainPage
    },
    {
        path: Shop_Rout,
        Component: Shop
    },
    {
        path: ProductPage_Rout + '/:id' ,
        Component: ProductPage
    },
    {
        path: InternetShop_Rout,
        Component: InternetShop
    }

]