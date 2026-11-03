import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <div className="home-logo"></div>
                <nav className="home-nav">
                    <a href="/">Home</a>
                    <a href="/feed">Feed</a>
                    <a href="/news">News</a>
                    <a href="/profile">Profile</a>
                </nav>
            </header>
            <section className="home-hero">
                <h1>Welcome to Wink</h1>
                <p>Discover amazing products and connect with creators from around the world.</p>
            </section>
            <main className="home-content">
                <div className="product-card">
                    <img src="https://via.placeholder.com/280" alt="Product" />
                    <h3>Product 1</h3>
                    <p>$49.99</p>
                </div>
                <div className="product-card">
                    <img src="https://via.placeholder.com/280" alt="Product" />
                    <h3>Product 2</h3>
                    <p>$59.99</p>
                </div>
                <div className="product-card">
                    <img src="https://via.placeholder.com/280" alt="Product" />
                    <h3>Product 3</h3>
                    <p>$39.99</p>
                </div>
            </main>
            <footer className="home-footer">
                <p>&copy; 2024 Wink. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;