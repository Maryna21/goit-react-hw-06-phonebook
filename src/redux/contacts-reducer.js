import { createStore, combineReducers } from 'redux';
// import types from 'redux/contacts-types';
import actions from './contacts-actions';
import { createReducer } from '@reduxjs/toolkit';

const initialContacts = localStorage.getItem('saveContacts') || '[]';
const parsedInitContacts = JSON.parse(initialContacts);

const items = createReducer(parsedInitContacts, {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) =>
        state.filter(({id})=> id !== payload)
})

const filter = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload,
})

export default combineReducers({
    items,
    filter
})


// const items = (state = [], actions) => {
//     console.log('reducer', actions, state)
//     switch (actions.type) {
//         case types.ADD:
//             return [...state, actions.payload];
        
//         case types.DELETE:
//             return state.filter(({ id }) => id !== actions.payload);
        
//         case types.INIT_CONTACTS:
//             return actions.payload;
        
//         default:
//             return state;
//     }
// };

// // const filter = (state = '', { type, payload }) => {
// //     switch (type) {
// //         case types.CHANGE_FILTER:
// //             return payload;
    
// //         default:
// //             return state;
// //     }
// // };
// const store = createStore(reducer);
// export default store;