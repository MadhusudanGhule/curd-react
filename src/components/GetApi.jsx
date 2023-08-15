import React, { useEffect, useState } from 'react';
import PostApi from './PostApi';

const GetApi = () => {
    const [data, setData] = useState([])

    useEffect(() => {
getData()
    }, [])
    const getData = () => {
        fetch('http://localhost:3001/users').then((result) => {
            result.json().then((resp) => {
                setData(resp)
            })
        })
    }
    // console.log("apiResulr", data[0])
    const deleteUser = (id) => {
        fetch(`http://localhost:3001/users/${id}`, {
            method: "DELETE"
        }).then((res) => {
            res.json().then((result) => {
                console.log(result)
                getData()
            })
        })
        // alert("user is deleted",id)
    }

    const[updatedData,setUpdateData]=useState({})
    // console.log(updatedData)
    const selectUser=(id)=>{
        
        setUpdateData(id)
       

    }


    return (
        <>

            <h1>get</h1>
            <div>
                <table border="1px">
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>phone</td>
                        <td>password</td>
                        <td>delete_</td>
                    </tr>
                    <tbody>

                    </tbody>

                    {
                        data && data.map((item, i) => {
                            return (
                                <tr key={i}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.password}</td>
                                    <td><button onClick={() => deleteUser(item.id)}>delete</button>
                                    <button onClick={()=>selectUser(item)}>update</button></td>
                                </tr>
                            )

                        })
                    }



                </table>
            </div>
            <PostApi updatedData={updatedData}/>
        </>
    );
}

export default GetApi;
