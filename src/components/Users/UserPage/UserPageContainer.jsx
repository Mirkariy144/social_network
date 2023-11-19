import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProfilePage from "../../ProfilePage/ProfilePage";
import c from '../../Content/Content.module.css'

let UserPageContainerProps = ({Posts, match}) => {
  console.log(match)
  const {id} = useParams()
  const zog_zog = useSelector((state) => state.Users.Users.find((user) => {
    return (
      +id === user.id
    )
  }))

  return (
    <div>
      {
        zog_zog
          ? (
            <div className={c.appContent}>
              <img src='https://klike.net/uploads/posts/2022-10/1666767724_3-30.jpg' /> 
              <ProfilePage Users={zog_zog} Posts={Posts} />
            </div>
          )
          : (
            'Error 404'
          )
      }
    </div>
)}

let mapStateToProps = (state) => {
  return{
    Posts: state.ShitPosts.Posts,
}}

const UserPageContainer = connect(mapStateToProps)(UserPageContainerProps)

export default UserPageContainer;