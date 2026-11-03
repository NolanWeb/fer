import React from 'react';
import './StripeApp.css';
import CheckoutForm from './CheckoutForm';

const StripeApp = () => {
    return (
        <div className="stripe-container">
            <div className="stripe-form">
                <h2>Secure Payment</h2>
                <CheckoutForm />
            </div>
        </div>
    );
};

export default StripeApp;