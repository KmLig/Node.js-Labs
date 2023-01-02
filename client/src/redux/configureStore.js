import { Users } from './users';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { applyMiddleware, combineReducers, createStore } from 'redux';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            users: Users
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}
