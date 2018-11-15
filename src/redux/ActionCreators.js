import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';


export const addComment = (dishId, rating, author, comment) => ({
    //specify action happening
    type: ActionTypes.ADD_COMMENT,
    //specify data in action
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment

    }
});

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 200);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

