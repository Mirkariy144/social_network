import { addNewPost } from '../../../Redux/ProfilePageReducer';
import ShitPost from './ShitPost';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    newPostLetter: state.ShitPosts.newPostLetter,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (data) => {
      dispatch(addNewPost(data));
    },
  };
};

const ShitPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShitPost);

export default ShitPostContainer;
