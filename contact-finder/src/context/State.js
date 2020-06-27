import React, { useReducer } from 'react';
import uuid from 'uuid';
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
} from './types';

const ContactState = (props) => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jimjom',
                email: '111-111-1111',
            },
            {
                id: 2,
                name: 'kimjung',
                email: '222-222-2222',
            },
        ],
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    // === Actions ===
    // Add Contact
    // Delete
    // Set Current
    // Clear Current
    // Update
    // Filter
    // Clear Filter
    
    return (
        <Context.Provider
            value={{
                contacts: state.contacts,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default ContactState;
