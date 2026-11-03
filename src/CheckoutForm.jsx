import React, { useState } from 'react';

const CheckoutForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Payment submitted:', { cardNumber, expiry, cvc });
    };

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <h2>Payment Details</h2>
            <input
                type="text"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
            />
            <input
                type="text"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
            />
            <button type="submit">Pay Now</button>
        </form>
    );
};

export default CheckoutForm;