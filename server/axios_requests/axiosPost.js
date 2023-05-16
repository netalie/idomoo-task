const axios = require('axios');
const helperMethods = require('../helperMethods');

async function sendPostRequest(jsonData) {
    console.log(jsonData);
    const authString = process.env.ACCOUNT_ID + ":" + process.env.SECRET_KEY;
    const encodedString = helperMethods.encodeToBase64(authString);

    //request configuration
    const config = {
        method: 'post',
        url: `https://usa-api.idomoo.com/api/v2/storyboards/generate`,
        headers: {
            'Authorization': 'Basic ' + encodedString,
            "x-idomoo-api-mode": "developer",
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
        data: jsonData
    };

    let res = await axios(config);
    let data = res.data;
    return data;
}

module.exports = { sendPostRequest };
