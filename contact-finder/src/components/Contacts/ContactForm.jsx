import React, { useState, useContext, useEffect } from 'react';
import Context from '../../context/context';
import style from './Contact.module.scss';

const ContactForm = (props) => {
    const context = useContext(Context);
    const {
        addContact,
        current,
        clearCurrent,
        updateContact,
    } = context;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
            });
        }
    }, [context, current]);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const { name, email, phone } = contact;

    const handleChange = (ev) =>
        setContact({ ...contact, [ev.target.name]: ev.target.value });

    const handleClear = (ev) => {
        clearCurrent();
    };

    const handleSubmit = (ev) => {
        ev.preventDefault();
        if (!current) {
            addContact(contact);
        } else {
            updateContact(contact);
        }
        clearCurrent();
        setContact({
            name: '',
            email: '',
            phone: '',
        });
    };
    return (
        <>
            <h2>{current ? 'Edit Contact' : 'Add Contact'}</h2>
            <form className={style.form} onSubmit={handleSubmit}>
                <label for="name-input">Name</label>
                <input
                    type="text"
                    placeholder="name"
                    required
                    name="name"
                    id="name-input"
                    value={name}
                    onChange={handleChange}
                />
                <label for="email-input">Email</label>
                <input
                    type="email"
                    placeholder="john@gmail.com"
                    name="email"
                    id="email-input"
                    value={email}
                    onChange={handleChange}
                />
                <label for="phone-input">Phone</label>
                <input
                    type="tel"
                    placeholder="123-456-7890"
                    name="phone"
                    id="phone-input"
                    value={phone}
                    onChange={handleChange}
                />
                <input type="submit" value="Submit" />
                {current && (
                    <button onClick={handleClear}>Back</button>
                )}
            </form>
        </>
    );
};

export default ContactForm;
