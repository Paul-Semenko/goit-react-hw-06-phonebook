import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import { reducer } from "./reducers";

const initialState = () => {
    const contact = localStorage.getItem('contacts');
    if (contact) {
      return JSON.parse(contact);
    } else { return []; }
};
    
const preloadState = {
    contacts: initialState(),
    filter: '',
}

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    preloadedState: preloadState,
    devTools: process.env.NODE_ENV === 'development',
});



export default store;