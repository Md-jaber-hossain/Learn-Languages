import React from 'react';
import { Link } from 'react-router-dom';
import "./Contact.css"

const Contact = () => {
    return (
        <div>
            <div className="text-center mt-lg-5">
                <h1 className="fw-bold"><span className="text-info">CONTACT</span> INFO</h1>
            </div>

            <div className="container mt-lg-5 mb-lg-5">
                <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
                    <div className="col">
                        <div className="card h-100 card-style">
                            <div class="card-body">
                                <h5 class="card-title">Address</h5>
                                <p class="card-text">Mirpur-1, Dhaka</p>
                                <p class="card-text">Bangladesh</p>
                                <Link to={'/home'}>
                                    <button className="btn btn-info text-white rounded-3">Go home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 card-style">
                            <div class="card-body">
                                <h5 class="card-title">E-mail</h5>
                                <p class="card-text">jaber15-8656@diu.edu.bd</p>
                                <p class="card-text">md.jaber8695@gmail.com</p>
                                <Link to={'/home'}>
                                    <button className="btn btn-info text-white rounded-3">Go home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 card-style">
                            <div class="card-body">
                                <h5 class="card-title">Phone</h5>
                                <p class="card-text">Mobile: 01621390353</p>
                                <p class="card-text">Tel: 0981212</p>
                                <Link to={'/home'}>
                                    <button className="btn btn-info text-white rounded-3">Go home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className="text-center mt-lg-5">
                <h1 className="fw-bold"><span className="text-info">MESSAGE </span>US</h1>
            </div>
            <div className=" m-lg-5 d-flex justify-content-md-center">
                <div className="card about-card-style mb-3" style={{ maxWidth: '1000px' }}>
                    <div className="row g-0">
                        <div className="col-md-6 d-flex justify-content-lg-center align-items-md-center p-3 ">
                            <img width="250px" src="https://www.pngarts.com/files/1/Message-PNG-Image-with-Transparent-Background.png" className=" about-img img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6 p-2 pt-3">
                            <div className="card-body">
                                <h5 className="card-title">Write something what you want to know</h5>
                                <div class="mb-3 mt-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Email..." />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Write mesage</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <div className="d-flex justify-content-lg-end">
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