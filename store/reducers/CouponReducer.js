import { SET_COUPON, FETCH_COUPONS } from "../actions/actionTypes"


const initialState = {
    coupon: {},
    coupons: []
}


function CouponReducer(state = initialState, action) {
    switch(action.type) {
        case SET_COUPON:
            return {
                ...state, 
                coupon: action.payload
            }
        case FETCH_COUPONS:
            return {
                ...state, 
                coupons: action.payload
            }
        default: 
            return state
    }
}

export default CouponReducer