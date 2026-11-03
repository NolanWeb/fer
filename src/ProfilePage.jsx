import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <div className="profile-avatar" style={{backgroundImage: 'url(https://via.placeholder.com/120)'}}></div>
                <div className="profile-username">@username</div>
                <div className="profile-stats">
                    <div className="profile-stat">
                        <div className="profile-stat-value">42</div>
                        <div className="profile-stat-label">Posts</div>
                    </div>
                    <div className="profile-stat">
                        <div className="profile-stat-value">1.2k</div>
                        <div className="profile-stat-label">Followers</div>
                    </div>
                    <div className="profile-stat">
                        <div className="profile-stat-value">380</div>
                        <div className="profile-stat-label">Following</div>
                    </div>
                </div>
            </div>
            <div className="profile-content">
                <div className="profile-item">
                    <img src="https://via.placeholder.com/250" alt="Post" />
                </div>
                <div className="profile-item">
                    <img src="https://via.placeholder.com/250" alt="Post" />
                </div>
                <div className="profile-item">
                    <img src="https://via.placeholder.com/250" alt="Post" />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;