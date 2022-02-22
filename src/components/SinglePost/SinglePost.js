import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SinglePost.css'

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    console.log(post);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("http://localhost:4000/posts/" + path);
            setPost(res.data);
        };
        getPost();
    }, [path]);
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img
                        className="singlePostImg"
                        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt=""
                    />
                )}
                <div className="row">
                    <div className="col-md-9">
                        <h1 className="singlePostTitle">{post.title}</h1>
                    </div>
                    <div className="col-md-3">
                        <div className="singlePostEdit">
                            <i className="singlePostIcon far fa-edit"></i>
                            <i className="singlePostIcon far fa-trash-alt"></i>
                        </div>
                    </div>
                </div>
                <div className="singlePostInfo">
                    <span>
                        Author:
                        <b className="singlePostAuthor">
                            <Link to={`/?user=${post.username}`} className="link">
                                <b> {post.username}</b>
                            </Link>
                        </b>
                    </span>
                    <span>{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                    quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                    Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                    eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                    error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                    impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                    odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos!
                    <br />
                    <br />
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
                    quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
                    Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
                    eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                    error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
                    impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
                    odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
                    iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
                    a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
                </p>
            </div>
        </div>
    );
};

export default SinglePost;