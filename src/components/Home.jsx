import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';


const Home = () => {
    const navigate=useNavigate()
    const [data, setData] = useState()
    
    useEffect(() => {
        getData()
    }, [])
    const getData=(()=>{
        axios.get('http://localhost:3002/users')
        .then(res => setData(res.data))
        .catch(error => console.log(error))
    })
    const deleteUser=(id)=>{
        axios.delete(`http://localhost:3002/users/${id}`)
        .then()
        .catch(error=>console.log(error))
        getData()
        navigate('/')

    }
    return (
        <>
            <h1>Hoem componet</h1>
            <Link to={"/create"}>Create</Link>
            <div>
                <table border="1px">
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>phone</td>
                        <td>password</td>
                        <td>Action</td>
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
                                    <button onClick={(e)=>deleteUser(item.id)}>delete</button>
                                    <button> <Link to={`/update/${item.id}`}>update</Link></button>

                                </tr>
                            )
                        })
                    }
                </table>
            </div>
            {/* <PostApi updatedData={updatedData} /> */}
        </>
    );
}
export default Home;
