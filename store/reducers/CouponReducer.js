import { SET_COUPON } from "../actions/actionTypes"


const initialState = {
    coupon: {}
}


function CouponReducer(state = initialState, action) {
    switch(action.type) {
        case SET_COUPON:
            return {
                ...state, 
                coupon: action.payload
            }
        default: 
            return state
    }
}

export default CouponReducer