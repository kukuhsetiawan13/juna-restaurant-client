import { SET_CART } from "../actions/actionTypes"


const initialState = {
    cart: []
}


function cartReducer(state = initialState, action) {
    switch(action.type) {
        case SET_CART:
            return {
                ...state, 
                cart: action.payload
            }
        default: 
            return state
    }
}

export default cartReducer