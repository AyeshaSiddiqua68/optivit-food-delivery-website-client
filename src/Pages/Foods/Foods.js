import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Foods = () => {
    const [food, setFood] = useState([]);
    const[control, setControl]=useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/allFoods")
            .then(res => res.json())
            .then(data => setFood(data));
    }, [control]);
    const handleDelete=(id)=>{
        fetch(`http://localhost:5000/deleteFood/${id}`,{
            method:"DELETE",
            headers:{"content-type":"application/json"},
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deleteCount){
                setControl(!control);
            }
            else{
                setControl(false);
            }
        })
        console.log(id);
    }
    return (
        <div className="container">
            <h1>Foods{food?.length}</h1>
            <Table striped bordered hover>
               <thead>
                   <tr>
                       <th>#</th>
                       <th>Food Name</th>
                       <th>Food Details</th>
                       <th>Image Link</th>
                       <th>Action</th>
                   </tr>
               </thead>
               { food?.map((pd, index)=>(
                <tbody key={index}>
                   <tr>
                       <td>{index}</td>
                       <td>{pd?.name}</td>
                       <td>{pd?.description}</td>
                       <td>{pd?.image}</td>
                       <button onClick={()=>handleDelete(pd._id)} className="btn btn-danger p-2">Delete</button>
                   </tr>
               </tbody>
               ))}
            </Table>
        </div>
    );
};

export default Foods;