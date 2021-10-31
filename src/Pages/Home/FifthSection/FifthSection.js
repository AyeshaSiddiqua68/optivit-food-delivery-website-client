import React from 'react';
import './FifthSection.css'
import logo1 from '../../../images/fifthSection/icon1.png'
import logo2 from '../../../images/fifthSection/icon2.png'
import logo3 from '../../../images/fifthSection/icon3.png'

const FifthSection = () => {
    return (
        <div className=" full-section my-5">
            <h5 className="title-fifth p-5">WHY OPTIVIT?</h5>
            <h1 className="fifth-h1">We Care for Your Precious Time.</h1>
       <div className="row my-5 d-flex justify-content-around ">
                <div className="col-md-3  each-part my-5">
                    <div>
                        <img className="w-50 p-2" src={logo1} alt="" />
                    </div>
                    <h2 className="fw-bold">The Best Restaurants</h2>
                    <h6>A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food.</h6>
                </div>
                <div className="col-md-3 each-part  my-5">
                    <div>
                        <img className="w-50 p-2" src={logo2} alt="" />
                    </div>
                    <h2 className="fw-bold">The Best Courier</h2>
                    <h6>For anything larger than a parcel, it can be more convenient and better value to arrange delivery with a courier service.</h6>
                </div>
                <div className="col-md-3 each-part  my-5">
                    <div>
                        <img className="w-50 p-2" src={logo3} alt="" />
                    </div>
                    <h2 className="fw-bold">24/7 Support</h2>
                    <h6>Just having satisfied customers isn’t good enough. If you really want a booming business, you have to create fans. </h6>
                </div>
            </div>
        </div>
    );
};

export default FifthSection;