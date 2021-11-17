import React from 'react';
import './Banner.css'
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner8.jpg'
import banner2 from '../../../images/banner/banner7.jpg'
import banner3 from '../../../images/banner/banner9.jpg'
import Bounce from "react-reveal/Bounce";

//home page banner part
const Banner = () => {
    return (
        <>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "600px" }}
                        src={banner2}
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <div className="row mx-auto carousel-caption">
                            <div className="align-items-center justify-content-center" >
                                <Bounce left cascade>
                                    <h1 className='carousel-title text-center  fw-bold'>Are You Hungry?</h1></Bounce>
                                <Bounce right cascade>
                                    <p className='carousel-p p-4 text-center text-white fw-bold'>Let's find something healthy delicious for you.</p></Bounce>
                                <Bounce>
                                    <p>
                                        <input type="text" className="loaction-btn" placeholder="Enter Your Location" />
                                        <button className="search-btn">Search</button>
                                    </p>
                                </Bounce>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "600px" }}
                        src={banner1}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="row mx-auto carousel-caption">
                            <div className="align-items-center justify-content-center" >
                                <Bounce left cascade>
                                    <h1 className='carousel-title text-center fw-bold'>Want Something Healthy?</h1></Bounce>
                                <Bounce right cascade>
                                    <p className='carousel-p p-4 text-center text-white fw-bold'>Order healthy and fresh food any time.</p></Bounce>
                                <Bounce>
                                <p>
                                        <input type="text" className="loaction-btn" placeholder="Enter Your Location" />
                                        <button className="search-btn">Search</button>
                                    </p>
                                </Bounce>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "600px" }}
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="row mx-auto carousel-caption">
                            <div className="align-items-center justify-content-center" >
                                <Bounce left cascade>
                                    <h1 className='carousel-title text-center fw-bold'>Looking For Different?</h1></Bounce>
                                <Bounce right cascade>
                                    <p className='carousel-p p-4 text-center text-white fw-bold'>Eat whatever, eat whenever as your wish!</p></Bounce>
                                <Bounce>
                                <p>
                                        <input type="text" className="loaction-btn" placeholder="Enter Your Location" />
                                        <button className="search-btn">Search</button>
                                    </p>
                                </Bounce>

                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;

