import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
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
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));