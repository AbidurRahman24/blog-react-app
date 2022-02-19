import React from 'react';
import SideBar from '../sidebar/SideBar';
import SinglePost from '../SinglePost/SinglePost';
import './Single.css'
const Single = () => {
    return (
        <div>
           <div className="row">
               <div className="col-md-9">
               <SinglePost></SinglePost>
               </div>
               <div className="col-md-3">
                    <SideBar></SideBar>
               </div>
           </div>
        </div>
    );
};

export default Single;