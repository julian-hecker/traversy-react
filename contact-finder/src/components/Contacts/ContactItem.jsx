import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Context from '../../context/context';
import style from './Contact.module.scss';

const ContactItem = ({ contact }) => {
    const context = useContext(Context);
    const { clearCurrent, deleteContact, setCurrent } = context;

    const handleDelete = () => {
        deleteContact(id);
        clearCurrent(contact)
    };

    const handleEdit = async () => {
        await clearCurrent();
        setCurrent(contact);
    }

    const { id, name, email, phone } = contact;
    return (
        <div className={style.card}>
            <h3>{name}</h3>
            <ul>
                {email && (
                    <li>
                        <a href={`mailto:${email}`}>
                            <i className="fas fa-envelope-open"></i>{' '}
                            {email}
                        </a>
                    </li>
                )}
                {phone && (
                    <li>
                        <a href={`tel:${phone}`}>
                            <i className="fas fa-phone-alt"></i>{' '}
                            {phone}
                        </a>
                    </li>
                )}
            </ul>
            <button onClick={handleDelete}>delete</button>
            <button onClick={handleEdit}>edit</button>
        </div>
    );
};

ContactItem.propTypes = {
    contact: PropTypes.object.isRequired,
};

export default ContactItem;
