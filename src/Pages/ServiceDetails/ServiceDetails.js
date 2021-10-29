import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ServiceDetails.css'

//service details page for detals button
const ServiceDetails = () => {
    let { id } = useParams();

    const [serviceDetails, setServiceDetails] = useState([]);

    const [singleService, setSingleService] = useState({})
    useEffect(() => {
        fetch('/serviceDetailsData.json')
            .then((res) => res.json())
            .then((data) => setServiceDetails(data.service))
    }, []);

    useEffect(() => {
        const foundService = serviceDetails.find((singleDetail) => singleDetail.login.id == id);
        setSingleService(foundService);
    }, [serviceDetails])
    return (
        <div>
            <div className="background">
                <div >
                    <img className="single-service-img" src={singleService?.img} alt="" />
                </div>
                <h1 className="single-service-name">
                    {singleService?.name}
                </h1>
                <p className="single-service-detail">
                    <strong>{singleService?.description}</strong>
                </p>

            </div>
            <div className='container health-care'>
                <h1 className='single-service-name'>Health Care Plans</h1>
                <p className='single-service-detail'>Our doctors include highly qualified male and female practitioners who come from a range of backgrounds and bring with a diversity of skills and special interests. Our administration and support staff all have exceptional people skills and trained to assist you with all medical enquiries.</p>
                <div className="row justify-content-around p-5">
                    <div className="col-lg-5 items ">
                        <ul>
                            <li>Review your medical records.</li>
                            <li>Check and test blood pressure.</li>
                            <li>Run tests such as blood tests.</li>
                        </ul>
                    </div>
                    <div className="col-lg-5 items">
                        <ul>
                            <li>Check and test lung function.</li>
                            <li>Narrowing of the arteries.</li>
                            <li>Other specialized tests.</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceDetails;