import React, { useEffect, useState } from 'react';

const PostApi = ({ updatedData }) => {
    const [setData, setSetData] = useState({})
    console.log(setData)

    useEffect(() => {
        setSetData(updatedData)
    }, [updatedData])

    const handleGetUpdatedData = (e) => {
        const { name, value } = e.target;
        setSetData((prevData) => ({
            ...prevData,    
            [name]: value,
        }));
    }

    const sendData = async () => {
        let data = setData
        console.log(data)
        await fetch("http://localhost:3000/users"
            , {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(data)
            }).then((result) => {
                // console.log("result",result)
                result.json().then((res) => {
                    console.log("res", res)
                })

            })
    }
    const updateData = (id) => {
        fetch(`http://localhost:3000/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(setData)
        }).then((res) => {
            res.json().then((result) => {
                console.log(result)

            })
        })
        // alert("user is deleted",id)
    }

    return (
        <>
            <h1>post</h1>

            <div>
                <input type="text"
                    onChange={handleGetUpdatedData}
                    name="name"
                    value={setData.name}
                    placeholder='name'

                /><br />
                <input type="email"
                    onChange={handleGetUpdatedData}
                    name='email'
                    value={updatedData.email}
                    placeholder='email'
                />
                <br />
                <input type="num"
                    onChange={handleGetUpdatedData}
                    name='phone'
                    value={updatedData.phone}
                    placeholder='phone'
                />
                <br />
                <input type="text"
                    onChange={handleGetUpdatedData}
                    name='password'
                    value={updatedData.password}
                    placeholder='password' />
                <br />
                <button onClick={sendData} >submit</button>
            </div>
        </>
    );
}

export default PostApi;