import apiRequest from '../../lib/apiRequest';
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {

    
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    // const navigate = useNavigate()

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

        // navigate("/login/login")


       } catch (error) {
        setError(error.response.data.message)
       }finally{
        setIsLoading(false)
       }



    }

  return (
    <div className="login">
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <input name="username" required minLength={3} max={20} type="text" placeholder='Username' />
                <input name="password" type="password" required placeholder='Password' />
                <button disabled={isLoading}>Login</button>
                <Link to={"/"}>Register</Link>
                {error && <span>{error}</span>}
            </form>
        </div>
    </div>
  )
}

export default Login