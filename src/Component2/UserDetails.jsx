import React,{useContext} from 'react';
import { UserContext, UserEduContext } from './Contex';


const UserDetails = () => {
    const UserName=useContext(UserContext)
    const data=useContext(UserEduContext)
    return (
        <div>
            <h1> userDetails:{data}</h1>
            <h1>name:{UserName}</h1>
        </div>
    );
}

export default UserDetails;
