import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import FoodReducer from './reducers/FoodReducer'


const rootReducer = combineReducers({
    FoodReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

