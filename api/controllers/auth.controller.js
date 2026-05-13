import bcrypt from "bcrypt"

export const register = async (req, res) => {
    console.log("register body",req.body);

    const {username, email, password} = req.body

    const hashPassword = await bcrypt.hash(password, 10);

    console.log("hash",hashPassword)

}

export const login = (req, res) => {
    console.log("login auth")
    
}

export const logout = (req, res) => {
    console.log("login auth")
    
}