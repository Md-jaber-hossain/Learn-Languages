import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import ServiceHome from '../ServiceHome/ServiceHome';

const Home = () => {
    // state and fetching data from my JSON file
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        fetch('./languages.JSON')
            .then(res => res.json())
            .then(data => setLanguages(data));
    }, []);
    return (
        <>
            <Header></Header>
            <div className=" container text-center mt-5">
                <h1 className="fw-bold">LANGUAGE <span className="text-info">COURSE</span> FEATURE</h1>
                <p className="text-secondary mt-5">Spoken language is just as it sounds: it's language that is spoken versus language that 's written or expressed non-verbally. Spoken language involves the actual use of speech or related utterances that convey meaning to share thoughts or other information.</p>
            </div>
            <div className="container mt-lg-5">
                {/* Carousel for sliding feature images */}
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
                <div className="text-center mt-5">
                    <h1 className="fw-bold">OUR <span className="text-info">SERVICES</span></h1>
                </div>
                <div className="container mt-5 mb-5">
                    <Row xs={1} md={2} className="g-5">
                        {/* Arrary mapping from state and call ServiceHome component */}
                        {
                            languages.slice(0,4).map(language => <ServiceHome
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