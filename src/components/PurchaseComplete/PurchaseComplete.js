import React from 'react';
import "./PurchaseComplete.css"

const PurchaseComplete = () => {
    // Purchase message show when click on buy now button
    return (
        <div className=" container purchase text-center mt-5 mb-5">
            <h1>Successfully purchased course</h1>
            <img className=" img-fluid mt-3 mb-5" src="https://lh3.googleusercontent.com/proxy/eUmKp8fiEDtb30iYm2ZaKq1L4ngfiL7zUbqeFzSAWFeoZDpZYgLJwdJV1VJmxGo41MUhIzmnrPLU_ZkKuQ64KJr7vkUtPxvd6txGKOnVYvQy" alt="..." />
        </div>
    );
};

export default PurchaseComplete;