import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, useParams } from "react-router-dom";
import axios from 'axios';
import "./AddEdit.css"
import { toast } from 'react-toastify';




const AddEdit = () => {
    const initialState = {
        name: "",
        email: "",
        contact: ""
    };
    const [state, setState] = useState(initialState);

    const { name, email, contact } = initialState;

    const navigate = useNavigate();

    const {id}=useParams();

    useEffect(()=>{
        if(id){
            getSingleUser(id);
        }
    },[id])

    const getSingleUser=async (id)=>{
        const response=await axios.get(`http://localhost:5000/user/${id}`);
            if(response.status===200){
                setState({...response.data[0]});
            }
    };


    // Api call
    const addUser = async (data) => {
        const response = await axios.post('http://localhost:5000/user', data);
        if (response.status === 200) {
            toast.success(response.data);
        }
    };

    const updateUser = async (data,id) => {
        const response = await axios.put(`http://localhost:5000/user/${id}`,data);
        if (response.status === 200) {
            toast.success(response.data);
        }
    }




    const handleSubmit = (e) => {
        e.preventDefault();

        // const newrecords={...state}
        // // console.log(newrecords);
 
        if (!state.name || !state.email || !state.contact) {
            toast.error("Please provide value into each input field");
        } else {
            if(!id){
                addUser(state);
            }else{
                updateUser(state,id)
            }
            setTimeout(()=>{
                navigate("/");
            },500)
        }
    }



    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setState({ ...state, [name]:value});

    }


    return (
        <div style={{ marginTop: "100px" }}>
            <form className='form-data' onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' placeholder='Enter Name...' onChange={handleInputChange} value={state.name} />

                <label htmlFor='email'>Email</label>
                <input type='email' id='email' name='email' placeholder='Enter Email...' onChange={handleInputChange} value={state.email} />

                <label htmlFor='contact'>Contact</label>
                <input type='text' id='contact' name='contact' placeholder='Enter Contact Number...' onChange={handleInputChange}  value={state.contact} />

                <input type='submit' id='submit' value={id? "Update":"Add"} />

            </form>
        </div>
    )
}

export default AddEdit;
