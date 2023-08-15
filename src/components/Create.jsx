import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })
    const navigate=useNavigate()
    function sendData() {
        axios.post('http://localhost:3002/users',input)
            .then((res) => {
                // alert("data post successfully!")
                navigate("/")
            })
    }
    return (
        <>
            <h1>create</h1>
            <div>
                <input type="text"
                    onChange={e=>setInput({ ...input, name: e.target.value })}
                    name="name"
                    placeholder='name'

                /><br />
                <input type="email"
                    onChange={e =>setInput({ ...input, email: e.target.value })}
                    name='email'
                    placeholder='email'
                />
                <br />
                <input type="num"
                    onChange={e => setInput({ ...input, phone: e.target.value })}
                    name='phone'
                    placeholder='phone'
                />
                <br />
                <input type="text"
                    onChange={e => setInput({ ...input, password: e.target.value })}
                    name='password'
                    placeholder='password' />
                <br />
                <button onClick={sendData} >submit</button>
            </div>
        </>
    );
}

export default Create;
