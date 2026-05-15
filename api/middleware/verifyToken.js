import jwt from "jsonwebtoken"

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token

    if(!token) return res.status(403).json({messaage : "Not Authenticate"});

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
        if(err) return resizeBy.status(403).josn("Token is not Valid");
        req.userId = payload.id;

        next()
    })

}