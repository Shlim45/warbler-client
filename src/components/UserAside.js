import React from 'react';
import DefaultProfileImage from '../images/default-profile-image.jpg';

const UserAside = ({ profileImageUrl, username }) => (
    <aside className="col-sm-2">
        <div className="panel panel-default">
            <img
                src={profileImageUrl || DefaultProfileImage}
                alt={username}
                className="img-thumbnail"
            />
        </div>
    </aside>
);

export default UserAside;