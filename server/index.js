require('dotenv').config()

const express = require("express");

const axios = require('axios');

const PORT = process.env.PORT || 3500;

const app = express();

const axiosGet = require('./axios_requests/axiosGet');
const axiosPost = require('./axios_requests/axiosPost');
const fs = require('fs');

axiosGet.sendGetRequest();

// Read JSON file
const parsedData = fs.readFile('./jsonData.json', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return data;
    }
    console.log(" DATA POST: " + data);
    axiosPost.sendPostRequest(data);
})

app.listen(PORT, () => {
    console.log(`Server linstening on ${PORT}`);

});