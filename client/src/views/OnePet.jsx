import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const OnePet =props => {
    const [onePet, setOnePet] = useState({});
    useEffect (() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => setOnePet(res.data.pet))
    },[])
    
    const removePet = _id =>{
        axios.delete(`http://localhost:8000/api/pets/delete/${_id}`)
            .then(res => navigate("/"))
            .catch(err=> console.log(err))
    }
    return(
        <div className="jumbotron">
            <button onClick={()=> removePet(onePet._id)}className="btn btn-danger">Adopt This Animal</button>
            <h1>Meet{onePet.name}</h1>
            <h3>Type:{onePet.type}</h3>
            <h4>A little info:{onePet.description}</h4>
            <h4>Skills:{onePet.skillOne},{onePet.skillTwo},{onePet.skillThree}</h4>
            
        </div>
    )
}

export default OnePet;