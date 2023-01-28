import {actionFetchAllFood, actionSetPizza, actionSetPasta, actionSetSideDish, actionSetDrinksAndDesserts} from '../actions/actionCreators'
import {BASE_URL} from '../baseUrl'
import axios from 'axios'


export const fetchAllFood = () => {
    return async (dispatch, getState) => {
        try {
            const {data} =  await axios({
                method: 'GET',
                url: `${BASE_URL}/food`,
            });
    
            dispatch(actionFetchAllFood(data))
            dispatch(actionSetPizza(data.filter(el => el.type === 'Pizza')))
            dispatch(actionSetPasta(data.filter(el => el.type === 'Pasta')))
            dispatch(actionSetSideDish(data.filter(el => el.type === 'Side Dish')))
            dispatch(actionSetDrinksAndDesserts(data.filter(el => el.type === 'Drinks and Desserts')))
        } catch(err) {
            console.log(err)
        }
        
    }
}