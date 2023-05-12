require('dotenv').config()

const express = require("express");

const axios = require('axios');

const PORT = process.env.PORT || 3500;

const app = express();

const axiosGet = require('./axios_requests/axiosGet');

axiosGet.sendGetRequest();



app.listen(PORT, () => {
    console.log(`Server linstening on ${PORT}`);

});