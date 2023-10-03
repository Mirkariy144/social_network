import React from "react";
import '../CSS/Content.css';
import ProfilePage from "./Profile_page";

const Content = () => {
    return (
        <div className="app-Content">
            <img src='https://klike.net/uploads/posts/2022-10/1666767724_3-30.jpg' />
            <ProfilePage />
        </div>
    );
};

export default Content;