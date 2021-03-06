import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css"

const Service = (props) => {
    const { img, name, description, price } = props.language
    return (
        <div>
            {/* services card to show details */}
            <Col>
                <Card className="height card-b" >
                    <Card.Img style={{ height: '250px', width: '100%', borderRadius: '15px' }} variant="top" src={img} />

                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text style={{ height: '70px' }}>
                            {description}
                        </Card.Text>
                        {/* price and button of the card*/}
                        <div className="d-flex justify-content-between">
                            <Card.Text><b>Price:</b> $
                                {price}
                            </Card.Text>
                            <Link to={'/purchase'}>
                                <button className="btn btn-info rounded-3 text-white ms-4"><i className="fas fa-money-check-alt"></i> Buy Now</button>
                            </Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;