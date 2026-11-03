import React, { useState } from 'react';
import './VideoCreation.css';

const VideoCreation = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Video created:', { title, description });
    };

    return (
        <div className="video-creation-container">
            <div className="video-creation-header">
                <h1>Create New Video</h1>
            </div>
            <form className="video-creation-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Video Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Video Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Create Video</button>
            </form>
            <div className="video-preview">
                <span>Video Preview</span>
            </div>
        </div>
    );
};

export default VideoCreation;