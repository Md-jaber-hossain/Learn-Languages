import React from 'react';
import "./About.css"
import { Card } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <div className="text-center mt-lg-5">
                <h1 className="fw-bold"><span className="text-info">ABOUT </span>US</h1>
            </div>
            <div className=" m-lg-5 d-flex justify-content-md-center">
                <div className="card about-card-style mb-3" style={{ maxWidth: '1000px' }}>
                    <div className="row g-0">
                        <div className="col-md-6 d-flex align-items-md-center p-3 ">
                            <img src="https://ulsites.ul.ie/mlal/sites/default/files/Language2.png" className=" about-img img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6 p-2 pt-3">
                            <div className="card-body">
                                <h5 className="card-title">We provide best language services</h5>
                                <p className="card-text">We have released some new language courses that will help you to gain more knowledge. We always try to give better content to learn effectively.</p>
                                <p className="card-text">We strive to excel in all areas of learning and envision to be the leading professional development center in the region and enrich human lives through personal fulfillment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-lg-5">
                <h1 className="fw-bold">OUR <span className="text-info">STRATEGY</span></h1>
            </div>
            <div className=" m-lg-5 d-flex justify-content-md-center">
                <div className="card mb-3 about-card-style" style={{ maxWidth: '1000px' }}>
                    <div className="row g-0">
                        <div className="col-md-6 p-2 pt-3">
                            <div className="card-body">
                                <h5 className="card-title">We Folow specific a target</h5>
                                <p className="card-text">The Cactus Course Outlines provide a learning framework for the Cactus Foreign Language Evening Courses. They are designed to provide you with a good idea of what you might cover over a 10-week period.</p>
                                <p className="card-text">Our 10-week courses comprise 20 hours of lessons, with one two-hour lesson per week, starting at 18.30. These fit easily into even the busiest schedule.</p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-md-center ps-4 ">
                            <img src="https://ulsites.ul.ie/mlal/sites/default/files/Language2.png" className="about-img img-fluid rounded-start" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;