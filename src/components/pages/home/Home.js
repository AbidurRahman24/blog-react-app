import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../header/Header';
import Posts from '../../Posts/Posts';
import SideBar from '../../sidebar/SideBar';
const axios = require('axios');

const Home = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
    useEffect(()=>{
        const fetchPosts = async () => {
            const res = await axios.get('http://localhost:4000/posts' + search)
            setPosts(res.data)
            // console.log(res);
        }
        fetchPosts();
    },[search])

    return (
        <>
            <div className="home">
                <Header></Header>
                <div className="row">
                    <div className="col-md-9">
                        <Posts posts={posts}></Posts>
                    </div>
                    <div className="col-md-3">
                        <SideBar></SideBar>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;