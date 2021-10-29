import React from 'react';
import { NavLink } from 'react-router-dom';
import './Service.css'
//every single service for all services
const Sevice = ({ service }) => {
    const { id, name, description, img, point1, point2, point3 } = service;
    return (
        <div className='col-lg-4 col-sm-6 col-12'>
            <div className='service shadow-lg'>
                <div><img className='img' src={img} alt="" /></div>
                <h2 className='my-5 fw-bold'>{name}</h2>
                <p>{description}</p>
                <ul className='list-item'>
                    <li>{point1}</li>
                    <li>{point2}</li>
                    <li>{point3}</li>
                </ul>
                <br />
                <NavLink
                    to={`/service/${service?.id}`}
                    activeStyle={{
                        fontWeight: 'bold'
                    }}
                >
                    <button className='btn-read-more fw-bold'>Details</button>
                </NavLink>
                {/* <button className='btn-read-more fw-bold'>Read More</button> */}
            </div>
        </div>
    );
};

export default Sevice;