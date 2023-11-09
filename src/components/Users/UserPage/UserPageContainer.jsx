import { useSelector } from "react-redux";
import UserPage from "./UserPage";
import { useParams } from "react-router-dom";
import ProfileInfo from "../../ProfilePage/ProfileInfo/ProfileInfo";

let UserPageContainer = () => {
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
            <UserPage User={zog_zog} />
          )
          : (
            'Error 404'
          )
      }
    </div>
)}

export default UserPageContainer;