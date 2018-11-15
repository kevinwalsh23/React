import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import  { Dishes } from './dishes';
import  { Leaders } from './leaders';
import  { Comments } from './comments';
import  { Promotions } from './promotions';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            promotions: Promotions,
            comments: Comments,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)

    );

    return store;
}