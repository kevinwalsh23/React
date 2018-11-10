import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

//to generate next state, need current state and action. cannot modify state directly here, can do immutable change and return new state
//state = initialistate initializes the state (ES6). if state undefinied, default is initialistate
export const Reducer = (state = initialState, action) => {
    return state;
};