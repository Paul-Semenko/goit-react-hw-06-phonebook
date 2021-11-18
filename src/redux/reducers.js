import { v4 as uuid } from "uuid";
import { createReducer } from "@reduxjs/toolkit";
import { contactSubmit, changeFilter, contactRemove } from "./actions";

function contactAdd(state = {}, action) {
    if (!state.contacts.find((el) => el.name === action.payload[0])) {
        const data = [...state.contacts, { name: action.payload[0], number: action.payload[1], id: uuid() }];
        localStorage.setItem('contacts', JSON.stringify(data));
        return { ...state, contacts: data };
    } else {
        alert(`${action.payload[0]} is already in contacts`);
        return state;
        }
}

function contactFilter(state = {}, action) {
    return { ...state, filter: action.payload };
}

function contactDelete(state = {}, action) {
    const data = state.contacts.filter((elem) => elem.id !== action.payload);
    localStorage.setItem('contacts', JSON.stringify(data));
    return { ...state, contacts: data };
}

export const reducer = createReducer({}, {
    [contactSubmit]: contactAdd,
    [changeFilter]: contactFilter,
    [contactRemove]: contactDelete,
})