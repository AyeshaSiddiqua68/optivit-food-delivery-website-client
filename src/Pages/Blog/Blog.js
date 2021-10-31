import React from 'react';
import './Blog.css'
import image5 from '../..//images/blogPage/blog1.jpg'
import image11 from '../..//images/blogPage/blog2.jpg'
import image12 from '../..//images/blogPage/blog3.jpg'
import image13 from '../..//images/blogPage/blog4.jpg'
import image6 from '../..//images/blogPage/blog5.jpg'
import image9 from '../..//images/blogPage/blog6.jpg'

// all about blog page
const Blog = () => {
    return (
        <div>
            <div className="blog-page my-5">
                <h1>Recent Blogs</h1>
            </div>
            <div className="row  my-4">
                <div className="col-md-4 col-sm-6 col-12">
                    <div>
                        <img className="w-50" src={image5} alt="" />
                    </div>
                    <h5>Breakfast Potatoes (Crispy + Tender)</h5>
                    <small>February 25, 2020</small>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <div>
                        <img className="w-50" src={image11} alt="" />
                    </div>
                    <h5>How to Make Your Breakfast Easy and Yummy</h5>
                    <small>June 28, 2020</small>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <div>
                        <img className="w-50" src={image12} alt="" />
                    </div>
                    <h5>Tips from Our Team: Making Yoghurts with Fresh</h5>
                    <small>December 15, 2020</small>
                </div>
            </div>
            <div className="row  my-4">
                <div className="col-md-4 col-sm-6 col-12">
                    <div>
                        <img className="w-50" src={image13} alt="" />
                    </div>
                    <h5>Balance of proteins, fats and carbo. How do I get it?</h5>
                    <small>March 10, 2021</small>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <div>
                        <img className="w-50" src={image6} alt="" />
                    </div>
                    <h5>The importance of proper and healthy eating for your body</h5>
                    <small>July 12, 2021</small>
                </div>
                <div className="col-md-4 col-sm-6 col-12">
                    <div>
                        <img className="w-50" src={image9} alt="" />
                    </div>
                    <h5>New seafood recipe perfect for losing weight – delicious and effective!</h5>
                    <small>October 15, 2021</small>
                </div>
            </div>


        </div>
    );
};

export default Blog;