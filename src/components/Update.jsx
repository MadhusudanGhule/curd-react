import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useParams,useNavigate } from 'react-router-dom';

const Update = () => {
    const navigate=useNavigate();
    const { id } = useParams();
    const [input, setInput] = useState({
        id: id,
        name: "",
        email: "",
        phone: "",
        password: ""
    })
    useEffect(() => {
        axios.get(`http://localhost:3002/users/${id}`)
            .then(res => setInput(res.data))
            .catch(error => console.log(error))
        return () => {
        };
    }, [id]);
    const sendData=()=> {
        axios.put(`http://localhost:3002/users/${id}`,input)
            .then(() => {
                alert("data post successfully!")
                navigate('/')
            })
    }
    return (
        <>
            <div>
                <h1>update</h1>
                <div>
                    <input type="text"
                        onChange={e => setInput({ ...input,id: e.target.value })}
                        name="num"
                        disabled
                        value={input.id}
                        placeholder='id'

                    /><br />
                    <input type="text"
                        onChange={e => setInput({ ...input,name: e.target.value })}
                        name="name"
                        value={input.name}
                        placeholder='name'

                    /><br />
                    <input type="email"
                        onChange={e => setInput({ ...input, email: e.target.value })}
                        name='email'
                        value={input.email}
                        placeholder='email'
                    />
                    <br />
                    <input type="num"
                        onChange={e => setInput({...input,phone:e.target.value})}
                        name='phone'
                        value={input.phone}
                        placeholder='phone'
                    />
                    <br />
                    <input type="text"
                        onChange={e => setInput({ ...input, password: e.target.value })}
                        name='password'
                        value={input.password}
                        placeholder='password' />
                    <br />
                    <button onClick={sendData} >submit</button>
                </div>

            </div>
            {/* // <div>
        //     <h1>update form</h1>
        //     <h1>current value {props.count}</h1>
        //     <h2>pre value{preval}</h2>
        // </div> */}
        </>

    );
}

export default Update;
