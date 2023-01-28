import { FETCH_ALL_FOOD, SET_PIZZA, SET_PASTA, SET_SIDE_DISH, SET_DRINKS_AND_DESSERTS } from "../actions/actionTypes"


export const actionFetchAllFood = (payload) => {
    return {
        type: FETCH_ALL_FOOD,
        payload
    }
}

export const actionSetPizza = (payload) => {
    return {
        type: SET_PIZZA,
        payload
    }
}

export const actionSetPasta = (payload) => {
    return {
        type: SET_PASTA,
        payload
    }
}

export const actionSetSideDish = (payload) => {
    return {
        type: SET_SIDE_DISH,
        payload
    }
}

export const actionSetDrinksAndDesserts = (payload) => {
    return {
        type: SET_DRINKS_AND_DESSERTS,
        payload
    }
}