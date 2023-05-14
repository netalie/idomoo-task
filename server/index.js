const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv').config();
const app = express();
const router = express.Router();
const routes = require("./routes/storyBoards");
const path = require("path");

const PORT = process.env.PORT || 3500;

//const axios = require('axios');

//ceates CORS header, this way any origin can get the reslonse of this server 


app.use(
    cors({
        credentials: true,
        origin: process.env.ORIGIN,
    })
);

app.use(express.json());
app.use("/", routes);


//const axiosGet = require('./axios_requests/axiosGet');
//const axiosPost = require('./axios_requests/axiosPost');
//const fs = require('fs');

//axiosGet.sendGetRequest();

// Read JSON file
// const parsedData = fs.readFile('./jsonData.json', 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return data;
//     }
//     console.log(" DATA POST: " + data);
//     axiosPost.sendPostRequest(data);
// })

app.listen(PORT, () => {
    console.log(`Server linstening on ${PORT}`);

});