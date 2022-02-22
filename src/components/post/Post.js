import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({ post }) => {
    console.log(post);
    return (
        <div className="post">
            <img
                className="postImg"
                src='https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <span className="postCat">{c.name}</span>
                    ))}
                </div>
                <span className="postTitle">
                    <Link to={`/post/${post._id}`} className="link" >
                        {post.title}
                    </Link>
                </span>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    );
};

export default Post;