import { combineReducers } from "redux";
import { productsreducer } from './products';
import { favsreducer } from "./favs";
import { cartreducer } from "./cart";
import { modalreducer } from "./modal";


export const reducers = combineReducers({
    products: productsreducer,
    favorites: favsreducer,
    cart: cartreducer,
    modal: modalreducer
})
