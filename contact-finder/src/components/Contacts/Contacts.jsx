import React, { useContext } from 'react';
import Context from '../../context/context';
import ContactItem from './ContactItem';
import style from './Contact.module.scss';

const Contact = (props) => {
    const context = useContext(Context);
    const { contacts, filtered } = context;

    if (contacts.length === 0) {
        return <h4>Add contacts plz</h4>;
    }

    return (
        <>
            <h2>Enjoy your Contacts</h2>
            <div className={style.contacts}>
                {filtered !== null
                    ? filtered.map((contact) => (
                          <ContactItem contact={contact} />
                      ))
                    : contacts.map((contact) => (
                          <ContactItem contact={contact} />
                      ))}
            </div>
        </>
    );
};

export default Contact;
