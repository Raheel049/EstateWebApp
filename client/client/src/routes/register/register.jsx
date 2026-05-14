import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest';

function Register() {

    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setIsLoading(true)
        setError("")

        const formData = new FormData(e.target);

        const username = formData.get("username");
        const email = formData.get("email");
        const password = formData.get("password");

       try {
        const res = await apiRequest.post("/auth/register",{username,email,password})
        console.log(res)

        navigate("/login/login")


       } catch (error) {
        setError(error.response.data.message)
       }finally{
        setIsLoading(false)
       }


    }

  return (
    <div className="regster">
        <div className="formContainer">
            <form onSubmit={handleSubmit}>  
                <h1>Create an Account</h1>
                <input name='username' type="text" placeholder='Username' />
                <input name='email' type="text" placeholder='Email' />
                <input name='password' type="password" placeholder='Password' />
                <button disabled={isLoading}>Register</button>

                {error && <span>{error}</span>}

                <Link to={"/login/login"}>Login</Link>

            </form>
        </div>
    </div>
  )
}

export default Register