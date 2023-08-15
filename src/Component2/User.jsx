import React, { useContext } from 'react';
import {UserContext} from './Contex';

const User = () => {
    const data = useContext(UserContext)
    // console.log(data)
    return (
        <div>
            <h1>UserComp :{data}</h1>
            {/* <Detail /> */}
        </div>
    );
}

export default User;
