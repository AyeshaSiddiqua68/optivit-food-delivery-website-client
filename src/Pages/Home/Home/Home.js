import React from 'react';
import Banner from '../Banner/Banner';
import ThirdSection from '../ThirdSection/ThirdSection';
import FifthSection from '../FifthSection/FifthSection';
import Service from '../Service/Service';
import { Container } from 'react-bootstrap';

//all about home page
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ThirdSection></ThirdSection>
            <Container style={{ padding: "80px 15px" }}>
          <h1 className="text-center fw-bold ">Our Food Items</h1>
          <p className="text-center text-muted mb-4">
            In this section you can find all of our featured health care related food
            services
          </p>

          <Service />
        </Container>
          
            <FifthSection></FifthSection>
        </div>
    );
};

export default Home;