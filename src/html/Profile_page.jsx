import React from "react";
import '../CSS/ProfilePage.css'

const ProfilePage = () => {
    return (
      <div className="ProfilePage">
        <div className="Ava">
            <img src='http://img.playground.ru/images/9/8/COTE_YOBA.jpg' className="Avatar" />
        </div>
        <div className="Name">
            Name
        </div>
        <div className="AboutMe">
            About me
            <div>Birthdate</div>
            <div>City</div>
            <div>Education</div>
            <div>Web-site</div>
        </div>
        <div className="ShitPosting">Shitposting</div>
      </div>  
    );
};

export default ProfilePage