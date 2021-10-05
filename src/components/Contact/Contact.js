import React from 'react';
import { Link } from 'react-router-dom';
import "./Contact.css"

const Contact = () => {
    return (
        <div>
            <div className="text-center mt-5">
                <h1 className="fw-bold"><span className="text-info">CONTACT</span> INFO</h1>
            </div>
            {/* Contact card 1 for detail contact */}
            <div className="container mt-5 mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
                    <div className="col">
                        <div className="card h-100 card-style">
                            <div className="card-body">
                                <h5 className="card-title"><i class="far fa-address-card"></i> Address</h5>
                                <p className="card-text">Mirpur-1, Dhaka</p>
                                <p className="card-text">Bangladesh</p>
                                <Link to={'/home'}>
                                    <button className="btn btn-info text-white rounded-3">Go home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Contact card 2 for detail contact */}
                    <div className="col">
                        <div className="card h-100 card-style">
                            <div className="card-body">
                                <h5 className="card-title"><i class="far fa-envelope"></i> E-mail</h5>
                                <p className="card-text">jaber15-8656@diu.edu.bd</p>
                                <p className="card-text">md.jaber8695@gmail.com</p>
                                <Link to={'/home'}>
                                    <button className="btn btn-info text-white rounded-3">Go home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Contact card 3 for detail contact */}
                    <div className="col">
                        <div className="card h-100 card-style">
                            <div className="card-body">
                                <h5 className="card-title"><i class="fas fa-mobile-alt"></i> Phone</h5>
                                <p className="card-text">Mobile: 01621390353</p>
                                <p className="card-text">Telephone: 0981212</p>
                                <Link to={'/home'}>
                                    <button className="btn btn-info text-white rounded-3">Go home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            {/* Simple form design for getting message */}
            <div className="text-center mt-5">
                <h1 className="fw-bold"><span className="text-info">MESSAGE </span>US</h1>
            </div>
            <div className=" m-5 d-flex justify-content-center">
                <div className="card about-card-style mb-3" style={{ maxWidth: '1000px' }}>
                    <div className="row g-0">
                        {/* image for form */}
                        <div className="col-md-6 d-flex justify-content-center align-items-center p-3 ">
                            <img width="250px" src="https://www.pngarts.com/files/1/Message-PNG-Image-with-Transparent-Background.png" className=" about-img img-fluid rounded-start" alt="..." />
                        </div>
                        {/* input message */}
                        <div className="col-md-6 p-2 pt-3">
                            <div className="card-body">
                                <h5 className="card-title">Write something what you want to know</h5>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email..." />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Write mesage</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                {/* submit button for form */}
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-info text-white ">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;