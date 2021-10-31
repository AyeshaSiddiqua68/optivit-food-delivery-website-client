import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css'
//every single service for all services
const Sevice = ({ service }) => {
    const { id, name, description, img, price } = service;
    return (
        <div className='col-lg-4 col-sm-6 col-12'>
            <div className='service shadow-lg'>
                <div><img className='img' src={img} alt="" /></div>
                <h2 className='my-5 fw-bold'>{name}</h2>
                <p>{description}</p>
                <h5><strong>Price:{price}</strong></h5>
                <br />
                <NavLink
                    to={`/service/${service?.id}`}
                    activeStyle={{
                        fontWeight: 'bold'
                    }}
                >
                    <button className='btn-read-more fw-bold'>Buy Now</button>
                </NavLink>
                {/* <button className='btn-read-more fw-bold'>Read More</button> */}
            </div>
        </div>
    );
};

export default Sevice;