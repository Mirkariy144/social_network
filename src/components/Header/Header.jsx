import React from "react";
import c from './Header.module.css';

const Header = () => {
    return (
        <div className={c.appHeader}>
            <img src='https://avatars.mds.yandex.net/i?id=9e935d9a791083dc250d6a14801ab3aac7276b15-10521504-images-thumbs&n=13' />
        </div>
    );
};

export default Header