import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js"



const app = express()

const port = 8800;

console.log("hell0");


app.use("/api/post",postRoute);
app.use("/api/auth",authRoute);


app.listen(port, () => {console.log("server running on port 5000!")});

