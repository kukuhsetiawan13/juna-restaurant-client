import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import FoodReducer from './reducers/FoodReducer'
import CartReducer from "./reducers/cartReducer";


const rootReducer = combineReducers({
    FoodReducer, CartReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

