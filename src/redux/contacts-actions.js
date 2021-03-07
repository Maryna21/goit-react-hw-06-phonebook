import shortid from 'shortid';
// import types from 'redux/contacts-types';
import { createAction } from '@reduxjs/toolkit';
// import { number } from 'prop-types';
 
const addContact = createAction('contacts/add', (name, number) => ({
        payload: {
         id: shortid.generate(),
         name,
         number,  
    }
}))

// const addContact = (name, number) => {
//     return {
//         type: types.ADD,
//         payload: {
//          id: shortid.generate(),
//          name,
//          number, 
//         }
//    } 
// };
const deleteContact = createAction('contacts/delete');

// const deleteContact = contactId => {
//     return {
//        type: types.DELETE,
//        payload: contactId, 
//     } 
// };

const changeFilter = createAction('contacts/changeFilter');

// const changeFilter = value => ({
//     type: types.CHANGE_FILTER,
//     payload: value,
// })

// const initContacts = contacts => ({
//     type: types.INIT_CONTACTS,
//     payload: contacts,
// })

 
export default { addContact, deleteContact, changeFilter};