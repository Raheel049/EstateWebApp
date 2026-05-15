import express from "express";
import dotenv from "dotenv"
dotenv.config()
import cookieParser from "cookie-parser";
import cors from "cors"
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import usersRoute from "./routes/user.route.js";






const app = express()

app.use(cors({origin : process.env.CLENT_SIDE_URL, credentials: true}))
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser())

const port = 8800;

console.log("hell0");


app.use("/api/post",postRoute);
app.use("/api/auth",authRoute);
app.use("/api/test",testRoute);
app.use("/api/users",usersRoute);
app.use("/api/posts",postRoute);


app.listen(port, () => {console.log("server running on port 5000!")});

