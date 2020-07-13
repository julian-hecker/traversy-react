import React, { useContext, useRef, useEffect } from 'react';
import Context from '../../context/context';

const ContactFilter = () => {
    const context = useContext(Context);
    const text = useRef('');
    const { filtered, clearFilter, filterContacts } = context;
    useEffect(() => {
        if (filtered === null) {
            text.current.value = '';
        }
    });
    const handleChange = (ev) => {
        if (text.current.value !== '') {
            filterContacts(ev.target.value);
        } else {
            clearFilter();
        }
    };
    return (
        <form>
            <input
                ref={text}
                type="text"
                placeholder="filter contacts..."
                onChange={handleChange}
            />
        </form>
    );
};

export default ContactFilter;
