import { addNewPost } from '../../../Redux/ProfilePageReducer';
import ShitPost from './ShitPost';
import { connect } from 'react-redux';

let mapStateToProps = (state: { ShitPosts: { newPostLetter: string } }) => {
  return {
    newPostLetter: state.ShitPosts.newPostLetter,
  };
};

let mapDispatchToProps = (dispatch: any) => {
  return {
    addPost: (data: {newPost: string}) => {
      dispatch(addNewPost(data));
    },
  };
};

const ShitPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShitPost);

export default ShitPostContainer;
