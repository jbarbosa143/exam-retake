import React,{ useState} from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const NewPet = props =>{
    const [form, setForm] = useState({
        name:"",
        type:"",
        description:"",
        skillOne:"",
        skillTwo:"",
        skillThree:""
    })

    const [error, setError] = useState({});

    const onChangeHandler = (e) =>{
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/new", form)
            .then(res=> {
                if(res.data.error){
                    console.log(res.data.error.errors)
                    setError(res.data.error.errors)
                }else{
                    console.log("IT DIDNT FUCK UPPP!")
                    navigate("/")
                }
            })
            .catch(console.log("You've Done And Gone Fucked up BOI"))

    }
    return(
        <div>
            <Form onSubmitHandler ={onSubmitHandler} form={form} onChangeHandler={onChangeHandler} error={error}/>
        </div>
    )

}
export default NewPet;