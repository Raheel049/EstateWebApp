import apiRequest from '../../lib/apiRequest';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import styles from "./login.module.css"


function Login() {

    
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const {updateUser} = useContext(AuthContext);

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true);
        setError("")

        const formData = new FormData(e.target);

        const username = formData.get("username");
        const password = formData.get("password");

       try {
        const res = await apiRequest.post("/auth/login",{username,password})
        console.log(res)

        updateUser(res.data)

        navigate("/")


       } catch (error) {
        setError(error.response.data.message)
       }finally{
        setIsLoading(false)
       }



    }

  return (
    <div className={styles.login}>
            <h1>Well come back</h1>

        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit}>
                <input name="username" required minLength={3} max={20} type="text" placeholder='Username' />
                <input name="password" type="password" required placeholder='Password' />
                <div className={styles.bottomItem}>
                <button disabled={isLoading}>Login</button>
                <Link to={"/"}><span>Don't you have an account</span></Link>
                </div>
                {error && <span>{error}</span>}
            </form>
        </div>

        <div className={styles.image}>
            <p>raheel</p>
        </div>
    </div>
  )
}

export default Login