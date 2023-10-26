import { addNewPost, modifyPostContent } from "../../../Redux/ProfilePageReducer";
import ShitPost from "./ShitPost";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostLetter: state.ShitPosts.newPostLetter
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addNewPost())
    },
    newInfoPostChange: (text) => {
      dispatch(modifyPostContent(text))
    },
  };
};

const ShitPostContainer = connect(mapStateToProps, mapDispatchToProps)(ShitPost);

export default ShitPostContainer