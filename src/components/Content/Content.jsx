import React from "react";
import c from './Content.module.css';
import ProfilePage from "../ProfilePage/ProfilePage";

const Content = (props) => {
    return (
        <div className={c.appContent}>
            <img src='https://klike.net/uploads/posts/2022-10/1666767724_3-30.jpg' />
            <ProfilePage store={props.store} />
        </div>
    );
};

export default Content;