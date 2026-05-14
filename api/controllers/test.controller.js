import jwt from "jsonwebtoken"

export const shouldBeLoggedIn = async (req, res) => {
    
       console.log("useriD",req.userId); 

        res.status(200).json({message : "You are Authenticate"});

    
}

export const shouldBeAdmin = (req, res) => {
    
    const token = req.cookies.token

        if(!token) return res.status(500).json({message : "Not Authenticate"})

        jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
            if(err) return res.status(403).json({message : "Token is not Valid"});
            if(!payload.isAdmin) {
                return res.status(403).json({message : "Not Authorized!"})
            }
        });

        res.status(200).json({message : "You are Authenticate"});
}