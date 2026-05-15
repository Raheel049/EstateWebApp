import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import "./profilePage.scss";
// import List from "../../components/list/List";
// import Chat from "../../components/chat/Chat";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import avatarImg from "../../assets/noavter.jpeg"

function ProfilePage() {

    const navigate = useNavigate()

    const {currentUser, updateUser} = useContext(AuthContext)

    const handleLogout = async () => {
        try {
            const res = await apiRequest.post("/auth/logout");

            localStorage.removeItem("userData");

            navigate("/");

        } catch (error) {
            console.log(error || "some thing went wrong");
        }
    }

  return (
    <>

    
      <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button onClick={() => {navigate("/profileUpdatePage")}}>Update Profile</button>
          </div>
          <div className="info">
            <span>{currentUser.avatar || <img src={avatarImg} alt="" />}</span>
            <span>Username: <b>{currentUser.username}</b></span>
            <span>E-mail: <b>{currentUser.email}</b></span>
            <button className="logout" onClick={handleLogout}>Logout</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          {/* <List /> */}
          <div className="title">
            <h1>Saved List</h1>
          </div>
          {/* <List /> */}
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          {/* <Chat/> */}
        </div>
      </div>
    </div>
    </>
  );
}

export default ProfilePage;