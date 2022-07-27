import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import axios from "axios";
const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        const response = await axios.get('http://localhost:5000/users');
        if (response.status === 200) {
            setData(response.data);
        }
    };
    // console.log("data", data);

    return (
        <div className='main-home'>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th className='table-heading'>No.</th>
                        <th className='table-heading'>Name</th>
                        <th className='table-heading'>Email</th>
                        <th className='table-heading'>Contact</th>
                        <th className='table-heading'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((items,index)=>{
                        return <tr key={index}>
                            <th scope='row'>{index+1}</th>
                            <td>{items.name}</td>
                            <td>{items.email}</td>
                            <td>{items.contact}</td>
                            <td>
                                <Link to={`/update/${items.id}`}>
                                    <button className='btn btn-edit'>Edit</button>
                                </Link>
                                <Link to={`/user/${items.id}`}>
                                    <button className='btn btn-delete'>Delete</button>
                                </Link>
                                <Link to={`/user/${items.id}`}>
                                    <button className='btn btn-view'>View</button>
                                </Link>
                            </td>
                        </tr>
                    })}
                </tbody>

            </table>
        </div>
    )
}

export default Home