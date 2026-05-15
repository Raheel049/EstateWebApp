import Register from "./routes/register/register";
import Login from "./routes/login/login";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/homePage/home";
import ProfilePage from "./routes/profilePage/profilePage";
import Layout from "./components/layout";
import ProfileUpdatePage from "./routes/profilePage/profileUpdatePage";

function App() {
  return (
    <>
      <Routes>
        {/* Layout Route */}
        <Route element={<Layout />}>
          {/* Child Routes */}
          <Route path="/" element={<Home />} />

          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />

          <Route path="/profilePage" element={<ProfilePage />} />

          <Route path="/profileUpdatePage" element={<ProfileUpdatePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
