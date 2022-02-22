import React from 'react';
import Post from '../post/Post';
import './Posts.css'

const Posts = ({posts}) => {
    // console.log(posts);
    return (
        <div className="posts">
            {
                posts.map((post)=><Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;