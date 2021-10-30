import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const AllCustomers = () => {
    const[customer, setCustomer]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/allCustomers")
        .then(res=>res.json())
        .then(data=>setCustomer(data));
    },[]);
    return (
        <div className="container">
            <h1>All Customers {customer?.length}</h1>
            <Table striped bordered hover>
               <thead>
                   <tr>
                       <th>#</th>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Date</th>
                       <th>Address</th>
                       <th>Action</th>
                   </tr>
               </thead>
               { customer?.map((pd, index)=>(
                   
                <tbody key={index}>
                   <tr>
                       <td>{index}</td>
                       <td>{pd?.name}</td>
                       <td>{pd?.email}</td>
                       <td>{pd?.date}</td>
                       <td>{pd?.address}</td>
                       <button className="btn btn-danger p-2">Delete</button>
                   </tr>
               </tbody>
               ))}
            </Table>
               
        </div>
    );
};

export default AllCustomers;