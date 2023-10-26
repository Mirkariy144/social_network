import React from "react";
import ProfilePage from "./ProfilePage"
import StoreContext from "../../StoreContext";

const ProfilePageContainer = () => {
  return (
    <StoreContext.Consumer>
      { 
        (store) => {
          return (
            <ProfilePage Post={store.getState().ShitPosts.Post} />
          )
        }
      }
    </StoreContext.Consumer>
  );
};

export default ProfilePageContainer