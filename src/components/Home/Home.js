import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import ServiceHome from '../ServiceHome/ServiceHome';

const Home = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        fetch('./languageHome.JSON')
            .then(res => res.json())
            .then(data => setLanguages(data));
    }, []);
    return (
        <>
            <div className=" container text-center mt-lg-5">
                <h1 className="fw-bold">Language <span className="text-primary">Course</span> Feature</h1>
                <p className="text-secondary mt-lg-5">Spoken language is just as it sounds: it's language that is spoken versus language that 's written or expressed non-verbally. Spoken language involves the actual use of speech or related utterances that convey meaning to share thoughts or other information.</p>
            </div>
            <div className="container mt-lg-5">
                <Carousel>
                    <Carousel.Item>
                        <img
                            style={{ height: '350px', width: '100%' }}
                            className="d-block"
                            src="https://md-online.pl/wp-content/uploads/sites/2/2019/02/language-banner.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: '350px', width: '100%' }}
                            className="d-block"
                            src="https://thumbs.dreamstime.com/b/design-concept-word-language-website-banner-143236215.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: '350px', width: '100%' }}
                            className="d-block"
                            src="https://media.istockphoto.com/vectors/internet-banner-about-learning-english-language-blue-outline-icons-vector-id1195746261"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            <div>
                <div className="text-center mt-lg-5">
                    <h1 className="fw-bold">Our <span className="text-primary">Services</span></h1>
                </div>
                <div className="container mt-5 mb-lg-5">
                    <Row xs={1} md={2} className="g-5">
                        {
                            languages.map(language => <ServiceHome
                                key={language.id}
                                language={language}>
                            </ServiceHome>)
                        }
                    </Row>
                </div>
            </div>
        </>
    );
};

export default Home;