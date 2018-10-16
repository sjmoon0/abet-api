import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import routes from "./src/routes/courseRoutes.js";

const app = express();
const PORT = 3030;

mongoose.Promise = global.Promise;
mongoose.connect("un:pw@mongodb://localhost/my-course-DB",{
    useNewUrlParser: true
}).catch("Failed to connect to mongoDB");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get("/", (req,res) => {
    res.send("Hi");
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});