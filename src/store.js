import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReducer from 'redux/contacts-reducer';

const rootReducer = combineReducers({
 contacts: contactsReducer
}) 


const store = createStore(rootReducer, composeWithDevTools());
export default store;