import React from 'react';

import {
    Contacts,
    ContactForm,
    ContactFilter,
} from '../../components/Contacts';
import style from './Home.module.scss';

const Home = (props) => {
    return (
        <div className={style.home}>
            <ContactFilter />
            <ContactForm />
            <Contacts />
        </div>
    );
};

export default Home;
