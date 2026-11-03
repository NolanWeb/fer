import React from 'react';
import './CartPage.css';

const CartPage = () => {
    return (
        <div className="cart-content">
            <div className="cart-header">
                <div className="cart-logo"></div>
            </div>
            <div className="cart-body">
                <div className="cart-item">
                    <img src="https://via.placeholder.com/60" alt="Product" />
                    <div className="cart-item-details">
                        <div className="cart-item-name">Product Name</div>
                        <div className="cart-item-price">$99.99</div>
                    </div>
                    <div className="cart-item-actions">
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
            </div>
            <div className="cart-footer">
                <div className="cart-total">Total: $99.99</div>
                <button className="checkout-button">Checkout</button>
            </div>
        </div>
    );
};

export default CartPage;