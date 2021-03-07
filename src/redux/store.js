import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from './todos/todos-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    },
    middleware,
    devToops: process.env.NODE_ENV==='development',
});

export default store;