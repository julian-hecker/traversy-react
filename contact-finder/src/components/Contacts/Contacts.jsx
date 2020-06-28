import React, { useContext } from 'react';
import Context from '../../context/context';
import ContactItem from './ContactItem';
import style from './Contact.module.scss';

const Contact = (props) => {
    const context = useContext(Context);
    const { contacts } = context;
    return (
        <>
            <h2>Enjoy your Contacts</h2>
            <div className={style.contacts}>
                {contacts.map((contact) => (
                    <ContactItem contact={contact} />
                ))}
            </div>
        </>
    );
};

export default Contact;
