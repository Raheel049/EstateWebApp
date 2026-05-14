import { useNavigate } from "react-router-dom";
import apiRequest from "../../lib/apiRequest";
import "./profilePage.scss";
// import List from "../../components/list/List";
// import Chat from "../../components/chat/Chat";

function ProfilePage() {

    const navigate = useNavigate()

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
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>Avatar: <img src="/noavatar.jpg" alt="" /></span>
            <span>Username: <b>John Doe</b></span>
            <span>E-mail: <b>john@gmail.com</b></span>
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
  );
}

export default ProfilePage;