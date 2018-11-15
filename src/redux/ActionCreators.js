import * as ActionTypes from './ActionTypes';

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