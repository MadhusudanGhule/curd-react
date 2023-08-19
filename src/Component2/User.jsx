import React, { useContext, useState } from 'react';
import { UserContext } from './Contex';

const User = () => {
    const users = useContext(UserContext)
    console.log(users)
    const [serchItem, setSerchItem] = useState('')
    const [serchRsult, setSerchRsult] = useState([]);
    function handelSerch() {
        const filteredUsers = users.filter(user =>
            user.name.includes(serchItem)
        );
        setSerchRsult(filteredUsers);
    }
    console.log(serchRsult)

    return (
        <div>
            <h1>UserComp :{ }</h1>
            <input type="text"
                placeholder='serch name'
                value={serchItem}
                onChange={(e) => setSerchItem(e.target.value)}
            />
            <button onClick={handelSerch}>handelSerch</button>

            {/* {serchRsult.map(user => (
                <div key={user.id}>
                    <p>Name: {user.name}</p>
                    <p>Education: {user.education}</p>
                    <p>Age: {user.age}</p>
                </div>
            ))} */}
            
            {serchRsult.map(user=>(
                <div key={ user.id}>
                    <p>name: {user.name}</p>
                    <p>education: {user.education}</p>
                    <p>edu: {user.age}</p>
                </div>
            ))
            }
        </div>
    );
}

export default User;
