import * as ActionTypes from './ActionTypes';

export const Users = (state = {
    users: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER: 
            return {...state, users: action.payload}
        case ActionTypes.USERS_RENDERING: 
            return {...state, users: action.payload}
    default:
        return state;
    }
}