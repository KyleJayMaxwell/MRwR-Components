import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail 
                author="Sam" 
                timeAgo="Today at 4:20pm" 
                commentText="Great Blog" 
                userImage={faker.image.avatar()} />
            <CommentDetail 
                author="Steve" 
                timeAgo="Today at 3:00am" 
                commentText="Nice Content" 
                userImage={faker.image.avatar()} />
            <CommentDetail 
                author="Randy" 
                timeAgo="Yesterday at 5:00pm" 
                commentText="I like the post" 
                userImage={faker.image.avatar()} />
         </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));