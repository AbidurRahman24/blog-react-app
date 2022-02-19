import React from 'react';
import Posts from '../../Posts/Posts';
import SideBar from '../../sidebar/SideBar';

const Home = () => {
    return (
        <>
            <div className="home">
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