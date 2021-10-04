import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        fetch('./languages.JSON')
            .then(res => res.json())
            .then(data => setLanguages(data));
    }, []);
    return (
        <div>
            <div className="text-center mt-lg-5">
                <h1 className="fw-bold">Our <span className="text-primary">Services</span></h1>
            </div>
            <div className="container mt-5 mb-lg-5">
                <Row xs={1} md={3} className="g-4">
                    {
                        languages.map(language => <Service
                            key={language.id}
                            language={language}>
                        </Service>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;