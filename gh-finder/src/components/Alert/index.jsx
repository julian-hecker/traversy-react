import React, { useContext } from 'react';
import alertContext from '../../context/alert/alertContext';


const Alert = () => {
    const actx = useContext(alertContext);
    const { alert } = actx;
    return (
        alert && (
            <div className={`alert alert-${alert.type}`}>* {alert.msg}</div>
        )
    );
};

export default Alert;
