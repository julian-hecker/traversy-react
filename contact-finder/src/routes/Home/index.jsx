import React from 'react';

import { Contacts, ContactForm } from '../../components/Contacts';
import style from './Home.module.scss';

const Home = (props) => {
    return (
        <div className={style.home}>
            <ContactForm />
            <Contacts />
        </div>
    );
};

export default Home;
