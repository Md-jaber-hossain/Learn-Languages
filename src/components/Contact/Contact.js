import React from 'react';

const Contact = () => {
    return (
        <div>
            <div className="text-center mt-lg-5">
                <h3>Contact Info</h3>
                <h1 className="fw-bold"><span className="text-primary">Contact</span> Us</h1>
            </div>

            <div className="container mt-lg-5 mb-lg-5">
                <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
                    <div className="col">
                        <div className="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Address</h5>
                                <p class="card-text">Mirpur-1, Dhaka</p>
                                <p class="card-text">Bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">E-mail</h5>
                                <p class="card-text">jaber15-8656@diu.edu.bd</p>
                                <p class="card-text">md.jaber8695@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Phone</h5>
                                <p class="card-text">Mobile: 01621390353</p>
                                <p class="card-text">Tel: 0981212</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;