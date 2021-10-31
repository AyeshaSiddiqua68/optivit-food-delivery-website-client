import React from 'react';
import logo4 from '../..//images/contactLogo/contact-info-logo4.png'
import logo5 from '../..//images/contactLogo/contact-info-logo5.png'
import logo6 from '../..//images/contactLogo/contact-info-logo6.png'
import Button from 'react-bootstrap/Button'
import logo from '../..//images/contactLogo/contact-info-logo.png'
import logo2 from '../..//images/contactLogo/contact-info-logo2.png'
import logo3 from '../..//images/contactLogo/contact-info-logo3.png'
import './Contact.css'
import { Accordion } from 'react-bootstrap';

// all about contact page
const Contact = () => {
    return (
        <div>
            {/* main part */}
            <div className="container">
                <div className="row my-5">
                    <div className="col-md-4 col-sm-2 col-12">
                        <div>
                            <img className="w-15" src={logo4} alt="" />
                        </div>
                        <h4>Office Address</h4>
                        <p>Lane-03, Block-B, Section-06 <br /> Mirpur, Dhaka-1216, Bangladesh</p>
                    </div>
                    <div className="col-md-4 col-sm-2 col-12">
                        <div>
                            <img className="w-40" src={logo5} alt="" />
                        </div>
                        <h4>Email Address</h4>
                        <p>ayesha68@gmail.com <br /> info49@gmail.com</p>
                    </div>
                    <div className="col-md-4 col-sm-2 col-12">
                        <div>
                            <img className="w-25" src={logo6} alt="" />
                        </div>
                        <h4>Office Time</h4>
                        <p>Mon - Sat 9:00 - 5:00 <br />
                            Sunday - Closed</p>

                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row p-5  ">
                    <div className="col-md-6 col-sm-12 col-12 left-part ">
                        <h1 className="text-danger fw-bold mt-4 p-4">Send Us Message</h1>
                        <input
                            className="footer-input mb-3 py-2 "
                            type="text"
                            placeholder="Enter Your Name"
                        /> <br />
                        <input
                            className="footer-input"
                            type="email"
                            placeholder="Enter Your Email"
                        /> <br />
                        <textarea className="p-3 mt-2" name="message" rows="5" cols="20" placeholder="Write Your Message"></textarea>
                        <br />
                        <Button className="m-4" variant="danger">Send</Button>
                    </div>


                    <div className="col-md-6 col-sm-12 col-12 right-part">
                        <h1 className="text-danger fw-bold mt-4 p-4">Get In Touch</h1>
                        <div className="row my-5 ">
                            <div className="col-md-4">
                                <div>
                                    <img className="w-50" src={logo} alt="" />
                                </div>

                            </div>
                            <div className="col-md-8">
                                <p><b>Lane-03, Block-B, Section-06 <br /> Mirpur, Dhaka-1216, Bangladesh</b></p>
                            </div>
                        </div>
                        <div className="row my-5 ">
                            <div className="col-md-4">
                                <div>
                                    <img className="w-50" src={logo2} alt="" />
                                </div>

                            </div>
                            <div className="col-md-8">
                                <p><b>+(666) 053 39985
                                    <br /> +(333) 026 58963</b></p>
                            </div>
                        </div>
                        <div className="row my-5 ">
                            <div className="col-md-4">
                                <div>
                                    <img className="w-50" src={logo3} alt="" />
                                </div>

                            </div>
                            <div className="col-md-8">
                                <p><b>themix@gmail.com <br /> support@themix.com</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-5">
                <h5 className="story">FAQ</h5>
                <h1 className="another-title">Frequently Asked Questions</h1>
                <div>
                <Accordion >
  <Accordion.Item  className="accordian-header" eventKey="0">
    <Accordion.Header>1.How long my order delivery?</Accordion.Header>
    <Accordion.Body>
    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item className="accordian-header" eventKey="1">
    <Accordion.Header>2.Can i cancel order?</Accordion.Header>
    <Accordion.Body>
      Yes, you can cancel your order within 30 minutes. After 30 minutes your order can not be cancaled.Because then we start to cook your food.
    </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item className="accordian-header" eventKey="2">
    <Accordion.Header>3.What kind of payment available?</Accordion.Header>
    <Accordion.Body>
      Casn on delivery system available. You can also make advance payment through Bkash / Nagad / Bank payment.
    </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item className="accordian-header" eventKey="3">
    <Accordion.Header>4.Can i order for someone?</Accordion.Header>
    <Accordion.Body>
      Yes, you can do it through advance payment system.
    </Accordion.Body>
    </Accordion.Item>
    <Accordion.Item className="accordian-header" eventKey="4">
    <Accordion.Header>5.What if my order double?</Accordion.Header>
    <Accordion.Body>
    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.
    </Accordion.Body>
    </Accordion.Item>
</Accordion>
  
  </div>
            </div>

        </div>
    );
};

export default Contact;