import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import Context from './context';
import reducer from './reducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jimjom',
                email: 'jimjongun@jimail.jom',
                phone: '111-111-1111',
            },
            {
                id: 2,
                name: 'kimjung',
                phone: '222-222-2222',
            },
        ],
        current: null,
        filtered: null,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    // === Actions ===
    // Add Contact
    const addContact = (contact) => {
        contact.id = uuid();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    // Delete
    const deleteContact = (id) => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };

    // Update
    const updateContact = (contact) => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    };

    // Set Current
    const setCurrent = (contact) => {
        dispatch({ type: SET_CURRENT, payload: contact });
    };

    // Clear Current
    const clearCurrent = (contact) => {
        dispatch({ type: CLEAR_CURRENT });
    };

    // Filter
    const filterContacts = (text) => {
        dispatch({ type: FILTER_CONTACTS, payload: text });
    };

    // Clear Filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    return (
        <Context.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                filtered: state.filtered,
                addContact,
                deleteContact,
                updateContact,
                setCurrent,
                clearCurrent,
                filterContacts,
                clearFilter,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default ContactState;
