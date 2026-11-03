import React from 'react';
import './Feed.css';

const Feed = () => {
    return (
        <div className="feed-container">
            <div className="feed-header">
                <h1>Feed</h1>
            </div>
            <div className="feed-content">
                <div className="feed-item">
                    <div className="feed-item-header">
                        <div className="feed-item-avatar" style={{backgroundImage: 'url(https://via.placeholder.com/40)'}}></div>
                        <span className="feed-item-username">User123</span>
                    </div>
                    <img className="feed-item-image" src="https://via.placeholder.com/600x400" alt="Post" />
                    <div className="feed-item-actions">
                        <button>Like</button>
                        <button>Comment</button>
                        <button>Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feed;