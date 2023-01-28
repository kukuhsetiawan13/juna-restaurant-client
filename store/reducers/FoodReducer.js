import { FETCH_ALL_FOOD, SET_PIZZA, SET_PASTA, SET_SIDE_DISH, SET_DRINKS_AND_DESSERTS } from "../actions/actionTypes"


const initialState = {
    allFood: [],
    pizza: [],
    pasta: [],
    sideDish: [],
    drinkAndDessert: []
}


function newsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ALL_FOOD:
            return {
                ...state, 
                allFood: action.payload
            }
        case SET_PIZZA:
            return {
                ...state, 
                pizza: action.payload
            }
        case SET_PASTA:
            return {
                ...state, 
                pasta: action.payload
            }
        case SET_SIDE_DISH:
            return {
                ...state, 
                sideDish: action.payload
            }
        case SET_DRINKS_AND_DESSERTS:
            return {
                ...state, 
                drinkAndDessert: action.payload
            }
        default: 
            return state
    }
}

export default newsReducer