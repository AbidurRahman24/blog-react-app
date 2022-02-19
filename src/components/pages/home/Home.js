import React from 'react';
import Header from '../../header/Header';
import Posts from '../../Posts/Posts';
import SideBar from '../../sidebar/SideBar';

const Home = () => {
    return (
        <>
            <div className="home">
                <Header></Header>
                <div className="row">
                    <div className="col-md-9">
                        <Posts></Posts>
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