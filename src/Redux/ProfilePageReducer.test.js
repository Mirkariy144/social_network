import { baseState } from './data';
import ProfilePageReducer, { addNewPost } from './ProfilePageReducer';

it('add new post', () => {
  let postID = 0;
  let initialState = {
    Posts: baseState.Posts.map((item) => ({ ...item, id: postID++ })),
  };

  const action = addNewPost(initialState, 'kurWa');
  let newState = ProfilePageReducer(initialState, action);

  expect(newState.Posts.length).toBe(6);
  expect(newState.Posts[5]).toBe({ id: 5 });
});
