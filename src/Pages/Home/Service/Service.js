import React, { useEffect, useState } from "react";
import { Row, Col, Card, Spinner } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5000/services")
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center my-5 py-5">
        <Spinner variant="success" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Row>
      {services?.map((service) => {
        return <SingleService service={service} key={service._id} />;
      })}
    </Row>
  );
};

const SingleService = ({ service }) => {
  const { name, _id, img, description, price } = service;
  return (
    <Col className="my-3" md={6} lg={4}>
      <Zoom>
        <Card>
          <Card.Img style={{ height: "250px" }} variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              <h4>{name}</h4>
            </Card.Title>
            <Card.Text>
              <p className="pb-0 mb-0">{description.slice(0, 80)}</p>
            </Card.Text>
            <Card.Title>
              <h4 style={{ minHeight: "60px" }}>PRICE:{price}</h4>
            </Card.Title>
            <NavLink to={`/service/${_id}`} className="w-100 btn btn-primary">
              Book Now
            </NavLink>
          </Card.Body>
        </Card>
      </Zoom>
    </Col>
  );
};

export default Service;





































// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Service.css'
// //every single service for all services
// const Sevice = ({ service }) => {
//     const { id, name, description, img, price } = service;
//     return (
//         <div className='col-lg-4 col-sm-6 col-12'>
//             <div className='service shadow-lg'>
//                 <div><img className='img' src={img} alt="" /></div>
//                 <h2 className='my-5 fw-bold'>{name}</h2>
//                 <p>{description}</p>
//                 <h5><strong>Price:{price}</strong></h5>
//                 <br />
//                 <NavLink
//                     to={`/service/${service?.id}`}
//                     activeStyle={{
//                         fontWeight: 'bold'
//                     }}
//                 >
//                     <button className='btn-read-more fw-bold'>Buy Now</button>
//                 </NavLink>
//                 {/* <button className='btn-read-more fw-bold'>Read More</button> */}
//             </div>
//         </div>
//     );
// };

// export default Sevice;