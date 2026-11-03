import React from 'react';
import './News.css';

const News = () => {
    return (
        <div className="news-container">
            <div className="news-header">
                <h1>Latest News</h1>
            </div>
            <div className="news-grid">
                <article className="news-card">
                    <img src="https://via.placeholder.com/350x200" alt="News" />
                    <div className="news-card-content">
                        <h2>News Title 1</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
                        <span className="news-card-date">Oct 24, 2024</span>
                    </div>
                </article>
                <article className="news-card">
                    <img src="https://via.placeholder.com/350x200" alt="News" />
                    <div className="news-card-content">
                        <h2>News Title 2</h2>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                        <span className="news-card-date">Oct 23, 2024</span>
                    </div>
                </article>
                <article className="news-card">
                    <img src="https://via.placeholder.com/350x200" alt="News" />
                    <div className="news-card-content">
                        <h2>News Title 3</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                        <span className="news-card-date">Oct 22, 2024</span>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default News;