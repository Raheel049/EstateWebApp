import React, { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from "../../context/authContext"
import avatarImg from "../../assets/noavter.jpeg"
import apiRequest from '../../lib/apiRequest.js'
import { Navigate, useNavigate } from 'react-router-dom'
import CloudinaryUploadWidget from '../../components/uploadWidget/uploadWidget.jsx'

const ProfileUpdatePage = () => {

    const {currentUser, updateUser} = useContext(AuthContext)
    console.log(currentUser);

    const [error, setError] = useState("")
    const [avatar, setAvatar] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)

        const {username, email, password} = Object.fromEntries(formData)


        try {
            const res = await apiRequest.put(`/users/${currentUser.id}`, {username, email, password, avatar})
        updateUser(res.data)

        navigate("/profilePage")
        

        } catch (error) {
            console.log(error)
            setError(error.res.data.message)
        }
    }

  return (
    <div className="profileUpdatePage">
        <div className="formContainer">
            <form action="" onSubmit={handleSubmit}>
                <div className="item">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name='username' defaultValue={currentUser.username} />
                </div>

                <div className="item">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name='email' defaultValue={currentUser.email} />
                </div>

                <div className="item">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name='password'  />
                </div>
                <button>Update</button>
                {error && <span>{error}</span>}
            </form>
        </div>
        <div className="sideContainer">
   <img
      src={avatar || currentUser.avatar || avatarImg}
      alt=""
      className='avatar'
   />

   <CloudinaryUploadWidget setAvatar={setAvatar} />
</div>
    </div>
  )
}

export default ProfileUpdatePage