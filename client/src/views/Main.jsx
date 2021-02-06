import React, {useEffect, useState}from 'react';
import axios from 'axios';

const Main = props => {
    const [pets,setPets] = useState();
    useEffect(()=> {
        axios.get("http://localhost:8000/api/pets")
            .then(res => setPets(res.data.pets))
    })
    return(
        <div>
            <h1>Hello World</h1>
            <table className="table table-bordered">
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                {
                    pets ? 
                    pets.map((pet, i)=> { 
                        return <tr>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td><a href={`http://localhost:3000/pets/${pet._id}`} className="btn btn-info">Details</a>&nbsp;|&nbsp;<a href={`http://localhost:3000/pets/update/${pet._id}`} className="btn btn-warning">Edit</a></td>
                        </tr>
                    }) : ""
                } 
            </table>
        </div>
    )
}
export default Main;
