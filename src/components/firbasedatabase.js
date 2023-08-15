import React, { useState } from 'react';
const Contact = () => {
    const [user, setUser] = useState({
        fullname: "",
        email: "",
        phone: "",
        add: "",
        msg: "",
    })
    let name, value
    const getUserData = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value })
        console.log(setUser)
    }
    const postData = async(e) => {
        e.preventDefault()
        const { name,email,phone,add,msg}=user
        const res = await fetch ("firbase database link.json    ",{
            method:"post",
            headers:{
                "contene-Type":"apllication/json",
            },body:JSON.Stringify({
                name,email,phone,add,msg 
            })
        })
        console.log(user)
        console.log()
        alert("data is send")
    }
    return (
        <>
            <form>
                <label >name</label>
                <input type="text"
                    placeholder='Name'
                    onChange={getUserData}
                    name="fullname"
                    value={user.fullname} />
                <br />

                <label>email</label>
                <input type="text"
                    placeholder='Email'
                    onChange={getUserData}
                    name='email'
                    value={user.email}
                />
                <br />
                <label>phone</label>
                <input type="text"
                    placeholder='phone'
                    onChange={getUserData}
                    name='phone'
                    value={user.phone}
                />
                <br />
                <label>Address</label>
                <input type="text"
                    placeholder='Address'
                    onChange={getUserData}
                    value={user.add}
                    name='add' />
                <br />
                <label >Massage</label>
                <input type="text"
                    placeholder='Massage'
                    onChange={getUserData}
                    value={user.msg}
                    name='msg' />
                <br />
                <button onClick={postData}>submil</button>
            </form>
        </>
    );
}

export default Contact;
