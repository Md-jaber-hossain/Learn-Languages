import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServiceHome = (props) => {
    const {img, name, description, price} = props.language
    return (
        <div>
            <Col>
                <Card className="card-b" style={{height:'450px'}}>
                    <Card.Img style={{height:'250px',width:'100%',borderRadius:'15px'}} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text style={{height:'70px'}}>
                            {description}
                        </Card.Text>
                        <Card.Text><b>Price:</b> $
                            {price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceHome;