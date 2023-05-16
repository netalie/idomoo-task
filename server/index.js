const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv').config();
const app = express();
const router = express.Router();
const routes = require("./routes/storyBoards");

const PORT = process.env.PORT;


const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use("/", routes);


app.listen(PORT, () => {
    console.log(`Server linstening on ${PORT}`);

});