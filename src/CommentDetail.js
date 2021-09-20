import React from 'react';

const CommentDetail = () => {
    return (
    <div className="comments">
        <a href="/" className="avatar">
            <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
            <a href="/" className="author">
                Billy
            </a>
            <div className="metadata">
                <span className="date">
                    Today at 6:01PM
                </span>
            </div>
            <div className="text">Nice Post!</div>
        </div>
    </div>
    );
};