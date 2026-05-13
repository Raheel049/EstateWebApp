import bcrypt from "bcrypt"
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
    try {
        console.log("register body",req.body);

    const {username, email, password} = req.body

    const hashPassword = await bcrypt.hash(password, 10);

    console.log("hash",hashPassword)

    const newUser = await prisma.user.create({
        data : {
            username,
            email,
            password : hashPassword,
        },
    });

    console.log("newUser", newUser);

    res.status(201).json({
        message : "User created successfully",
    })

    } catch (error) {
        res.status(500).json({
            message : error.message || "Internal server error",
        })
    }

}

export const login = async (req, res) => {
    try {
        console.log("login auth")

    const {username, password} = req.body

    const user = await prisma.user.findUnique({
        where:{username}
    })

    if(!user) return res.status(401).json({message : "invalid Credendials!"});

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid) return res.status(401).json({message : "invalid Credendials!"});

    } catch (error) {
        console.log(error)

        res.status(500).json({message : "Failed to login!"})
    }
    
}

export const logout = (req, res) => {
    console.log("login auth")
    
}