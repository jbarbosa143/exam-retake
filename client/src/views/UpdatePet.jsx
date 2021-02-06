import React, {useEffect, useState}from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const UpdatePet = props =>{
    const [form, setForm] = useState({
        name:"",
        type:"",
        description:"",
        skillOne:"",
        skillTwo:"",
        skillThree:""
    })
    const [error, setError] = useState({});

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => setForm(res.data.pet))
    },[])

    const onChangeHandler = (e) =>{
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const onSubmitHandler =(e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props._id}`,form)
            .then(res=>{
                if(res.data.error){
                    setError(res.data.error.errors)
                }else{
                    navigate("/")
                }
            })

    }
    return(
        <div>
            <h2>Edit Pet</h2>
            <Form onSubmitHandler ={onSubmitHandler} form={form} onChangeHandler={onChangeHandler} error={error}/>
        </div>
    )
}
export default UpdatePet;