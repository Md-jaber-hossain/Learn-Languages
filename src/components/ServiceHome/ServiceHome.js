import React from 'react';
import "./ServiceHome.css"
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceHome = (props) => {
    const { img, name, description, price } = props.language
    return (
        <div>
            <Col>
                <Card className="card-b" style={{ height: '450px' }}>
                    <Card.Img style={{ height: '250px', width: '100%', borderRadius: '15px' }} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text style={{ height: '70px' }}>
                            {description}
                        </Card.Text>
                        <div className="d-flex justify-content-lg-between align-items-md-center">
                            <Card.Text><b>Price:</b> $
                                {price}
                            </Card.Text>
                            <div className="d-flex">
                                <Link to={'/services'}>
                                    <button className="btn btn-primary rounded-3 text-white">More</button>
                                </Link>
                                <Link to={'/purchase'}>
                                    <button className="btn btn-info rounded-3 text-white ms-lg-4"><i className="fas fa-money-check-alt"></i> Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceHome;