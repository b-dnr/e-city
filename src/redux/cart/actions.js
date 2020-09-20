import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART} from './constants'

export const addItemToCart = (item)=>({
    type: ADD_ITEM_TO_CART,
    payload: item
})

export const removeItemFromCart = (slug)=>({
    type: REMOVE_ITEM_FROM_CART,
    payload: slug
})