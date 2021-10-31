import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner8.jpg'
import banner2 from '../../../images/banner/banner7.jpg'
import banner3 from '../../../images/banner/banner9.jpg'

//home page banner part
const Banner = () => {
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item className="banner-image col-lg-12 col-sm-12 col-12">
                    <img
                        className="d-block w-100 "
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="row">
                            <div className="col-lg-6"></div>

                            <div className="col-lg-6 col-sm-6 col-6 d-flex justify-content-center align-items-center  ">
                                <div className="banner-section p-4 ">
                                    <h1 className='carousel-title'>Hungry?</h1>

                                    <h1 className='carousel-p p-4'>Let's find something healthy delicious for you.</h1>
                                    <p ><small>We love making our customers happy by serving them our tasty food! High-quality ingredients mixed with excellent service is the best recipe for a successful food truck.</small></p>
                                    <input type="text" className="loaction-btn" placeholder="Enter Your Location" />
                                    <button className="search-btn">Search</button>
                                </div>

                            </div>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner-image col-lg-12 col-sm-12 col-12">
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className="row">
                            

                            <div className="col-lg-6 col-sm-6 col-6 d-flex justify-content-center align-items-center  ">
                                <div className="banner-section p-4 ">
                                    <h1 className='carousel-title'>Healthy?</h1>

                                    <h1 className='carousel-p p-4'>Order healthy and fresh food any time.</h1>
                                    <p ><small>We love making our customers happy by serving them our tasty food! High-quality ingredients mixed with excellent service is the best recipe for a successful food truck.</small></p>
                                    <input type="text" className="loaction-btn" placeholder="Enter Your Location" />
                                    <button className="search-btn">Search</button>
                                </div>

                            </div>
                            <div className="col-lg-6"></div>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner-image col-lg-12 col-sm-12 col-12">
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="row">
                            <div className="col-lg-6"></div>

                            <div className="col-lg-6 col-sm-6 col-6 d-flex justify-content-center align-items-center  ">
                                <div className="banner-section p-4 ">
                                    <h1 className='carousel-title'>Different?</h1>

                                    <h1 className='carousel-p p-4'>Eat whatever, eat whenever as your wish!</h1>
                                    <p ><small>We love making our customers happy by serving them our tasty food! High-quality ingredients mixed with excellent service is the best recipe for a successful food truck.</small></p>
                                    <input type="text" className="loaction-btn" placeholder="Enter Your Location" />
                                    <button className="search-btn">Search</button>
                                </div>

                            </div>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;