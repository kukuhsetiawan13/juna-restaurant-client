import {actionFetchAllFood, actionSetPizza, actionSetPasta, actionSetSideDish, actionSetDrinksAndDesserts, actionSetCart } from '../actions/actionCreators'
import {BASE_URL} from '../baseUrl'
import axios from 'axios'


export const fetchAllFood = () => {
    return async (dispatch, getState) => {
        try {
            const {data} =  await axios({
                method: 'GET',
                url: `${BASE_URL}/food`,
            });

            dispatch(actionSetPizza(data.filter(el => el.type === 'Pizza')))
            dispatch(actionSetPasta(data.filter(el => el.type === 'Pasta')))
            dispatch(actionSetSideDish(data.filter(el => el.type === 'Side Dish')))
            dispatch(actionSetDrinksAndDesserts(data.filter(el => el.type === 'Drinks and Desserts')))
        } catch(err) {
            console.log(err)
        }
        
    }
}

export const addItem = (item) => {
    return (dispatch, getState) => {
        const { CartReducer } = getState();

        const newCart = [...CartReducer.cart]

        const index = newCart.findIndex(el => el?.FoodId === item.id)
        if(index < 0) {
            newCart.push({
                "FoodId": item.id,
                "name": item.name,
                "price": item.price,
                "picture": item.picture,
                "quantity": 1
            })
        } else {
            newCart[index].quantity += 1
        }

        dispatch(actionSetCart(newCart))
    }
}

export const subtractItem = (item) => {
    return (dispatch, getState) => {
        const { CartReducer } = getState();

        const newCart = [...CartReducer.cart]

        const index = newCart.findIndex(el => el?.FoodId === item.id)
        if(index < 0) {
            return
        } else {
            if(newCart[index].quantity === 1) {
                newCart.splice(index, 1)
            }
            else {
                newCart[index].quantity -= 1
            }
        }

        dispatch(actionSetCart(newCart))
    }
}

export const updateCartAdd = (item) => {
    return (dispatch, getState) => {
        
        const { CartReducer } = getState();

        const newCart = [...CartReducer.cart]

        const index = newCart.findIndex(el => el?.FoodId === item.FoodId)
        newCart[index].quantity += 1

        dispatch(actionSetCart(newCart))
    }
}

export const updateCartSubtract = (item) => {
    return (dispatch, getState) => {
        
        const { CartReducer } = getState();

        const newCart = [...CartReducer.cart]

        const index = newCart.findIndex(el => el?.FoodId === item.FoodId)
        if(index < 0) {
            return
        } else {
            if(newCart[index].quantity === 1) {
                newCart.splice(index, 1)
            }
            else {
                newCart[index].quantity -= 1
            }
        }

        dispatch(actionSetCart(newCart))
    }
}

export const removeItemFromCart = (item) => {
    return (dispatch, getState) => {
        
        const { CartReducer } = getState();

        const newCart = [...CartReducer.cart]

        const index = newCart.findIndex(el => el?.FoodId === item.FoodId)
        newCart.splice(index, 1)

        dispatch(actionSetCart(newCart))
    }
}