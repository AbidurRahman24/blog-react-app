import React from 'react';
import './Post.css';

const Post = () => {
    return (
        <div className="post">
            <img
                className="postImg"
                src='https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <a className="link" href="/posts?cat=Music">
                            Music
                        </a>
                    </span>
                    <span className="postCat">
                        <a className="link" href="/posts?cat=Music">
                            Life
                        </a>
                    </span>
                </div>
                <span className="postTitle">
                    <a href="/post/abc" className="link">
                        Lorem ipsum dolor sit amet
                    </a>
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
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