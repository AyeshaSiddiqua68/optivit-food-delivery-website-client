import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const ServiceDetails = () => {
  const { allAuthInfo } = useAuth();
  const { user } = allAuthInfo;
  const { displayName, email, photoURL } = user;
  const [service, setService] = useState({});
  const history = useHistory();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://stormy-savannah-30546.herokuapp.com/singleservice/${id}`)
      .then((res) => {
        const gotService = res.data;
        setService(gotService);
      });
  }, [id]);

  const { img, name, description, price } = service;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { name, email, address, phone, profile } = data;
    const ordered = {
      price,
      img,
      name,
      description,
      name,
      email,
      address,
      phone,
      profile,
      status: "Pending",
    };

    axios
      .post("https://stormy-savannah-30546.herokuapp.com/book", ordered)
      .then((res) => {
        const response = res.data;
        if (response) {
          alert("Order has been successful!");
          history.push("/myorders");
        } else {
          alert("something went wrong!!");
        }
      });
  };

  return (
    <>


      <div
        style={{
          minHeight: "80vh",
          backgroundAttachment: "fixed",
          marginTop: "100px",
        }}
        className="pb-2"
      >
        <h1 className="text-center booking-title fw-bold mb-5">
          Order This Item
        </h1>
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-4 col-12 p-2 overflow-hidden">
                <img
                  className="img-fluid"
                  style={{
                    maxHeight: "600px",
                    objectFit: "fill",
                  }}
                  src={img}
                  alt=""
                />
              </div>
              <div className="col-lg-8 col-12">
                <div className="p-2">
                  <h2>{name}</h2>
                  <p className="m-0">{description}</p>
                  <h4 className="mb-3 mt-2">Price:{price}</h4>
                  <div>
                    <form
                      className="d-block w-100"
                      onSubmit={handleSubmit(onSubmit)}
                    >
                      <label className="d-block mb-4" htmlFor="name">
                        <h6>Your Name</h6>
                        <input
                          required
                          defaultValue={displayName}
                          className="form-control w-100 d-block"
                          id="name"
                          placeholder="Your Name"
                          {...register("name")}
                        />
                      </label>

                      <label className="d-block mb-4" htmlFor="price">
                        <h6>
                          Your Email Address
                          <span className="text-danger">
                            <small>Can't be changed</small>
                          </span>
                        </h6>
                        <input
                          required
                          readOnly
                          type="text"
                          defaultValue={email}
                          className="form-control w-100 d-block"
                          id="email"
                          placeholder="Your Email Address"
                          {...register("email")}
                        />
                      </label>

                      <label className="d-block mb-4" htmlFor="address">
                        <h6>Your Address</h6>
                        <input
                          required
                          type="address"
                          className="form-control w-100 d-block"
                          id="address"
                          placeholder="Your address"
                          {...register("address")}
                        />
                      </label>

                      <label className="d-block mb-4" htmlFor="phone">
                        <h6>Your Phone Number</h6>
                        <input
                          required
                          type="phone"
                          className="form-control w-100 d-block"
                          id="phone"
                          placeholder="Your phone number"
                          {...register("phone")}
                        />
                      </label>

                      <label className="d-block mb-4" htmlFor="photo">
                        <h6>Your profile Photo</h6>
                        <input
                          defaultValue={photoURL}
                          className="form-control w-100 d-block"
                          id="photo"
                          placeholder="Your profile Photo url"
                          {...register("profile")}
                        />
                      </label>

                      <input
                        required
                        value="Place Order now"
                        className="btn mb-3 btn-primary border-0 rounded-0 w-100 d-block"
                        type="submit"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default ServiceDetails;




















// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import PlaceOrder from "../PlaceOrder/PlaceOrder";
// import './ServiceDetails.css'

// //service details page for detals button
// const ServiceDetails = () => {
//     let { id } = useParams();

//     const [serviceDetails, setServiceDetails] = useState([]);

//     const [singleService, setSingleService] = useState({})
//     useEffect(() => {
//         fetch('https://stormy-savannah-30546.herokuapp.com/foods')
//             .then((res) => res.json())
//             .then((data) => setServiceDetails(data))
//     }, []);

//     useEffect(() => {
//         const foundService = serviceDetails.find((singleDetail) => singleDetail.id == id);
//         setSingleService(foundService);
//     }, [serviceDetails])
//     return (
//         <div>
//             <div className="row container">
//                 <div className="col-md-6">
//                 <div className="background p-5">
//                 <div >
//                     <img className="single-service-img" src={singleService?.img} alt="" />
//                 </div>
//                 <h2 className="single-service-name fw-bold">
//                     {singleService?.name}
//                 </h2>
//                 <h4><strong>{singleService?.price}</strong></h4>
//                 <h5 className="single-service-detail">
//                     <strong>{singleService?.description}</strong>
//                 </h5>

//             </div>
//                 </div>
//                 <div className="col-md-6">
//                 <PlaceOrder></PlaceOrder>
//                 </div>
//             </div>


//         </div>
//     );
// };

// export default ServiceDetails;