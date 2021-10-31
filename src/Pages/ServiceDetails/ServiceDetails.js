import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PlaceOrder from "../PlaceOrder/PlaceOrder";
import './ServiceDetails.css'

//service details page for detals button
const ServiceDetails = () => {
    let { id } = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);

    const [singleService, setSingleService] = useState({})
    useEffect(() => {
        fetch('https://stormy-savannah-30546.herokuapp.com/foods')
            .then((res) => res.json())
            .then((data) => setServiceDetails(data))
    }, []);

    useEffect(() => {
        const foundService = serviceDetails.find((singleDetail) => singleDetail.id == id);
        setSingleService(foundService);
    }, [serviceDetails])
    return (
        <div>
            <div className="row container">
                <div className="col-md-6">
                <div className="background p-5">
                <div >
                    <img className="single-service-img" src={singleService?.img} alt="" />
                </div>
                <h2 className="single-service-name fw-bold">
                    {singleService?.name}
                </h2>
                <h4><strong>{singleService?.price}</strong></h4>
                <h5 className="single-service-detail">
                    <strong>{singleService?.description}</strong>
                </h5>

            </div>
                </div>
                <div className="col-md-6">
                <PlaceOrder></PlaceOrder>
                </div>
            </div>
            
            
        </div>
    );
};

export default ServiceDetails;