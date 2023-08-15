import React, { useContext } from 'react';
import {UserAgeContext} from './Contex';

const Detail = () => {
    const data=useContext(UserAgeContext)
    return (
        <div>
            <h1>Detail {data}</h1>
        </div>
    );
}

export default Detail;
