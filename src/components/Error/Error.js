import React from 'react';
import "./Error.css"

const Error = () => {
    return (
        // Show error message when route not found
        <div className="error-style container text-center mt-5 mb-5">
            <h1>404 - Page not found</h1>
            <img src="https://lh3.googleusercontent.com/proxy/e3T2gqm1AdAkYV43eDjp_NZ_QhQ_6li1zRKkQ2apHfgKljdSzETgxuCTvevu25xO5T7ft0E44kyUQOnwEWy5_3X9UYzZFDLhgAtEpbXs" className="img-fluid rounded-start" alt="..." />
        </div>
    );
};

export default Error;