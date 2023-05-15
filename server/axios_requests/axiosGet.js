const axios = require('axios');
const helperMethods = require('../helperMethods')

async function sendGetRequest() {
    //get request configuration
    const authString = process.env.ACCOUNT_ID + ":" + process.env.SECRET_KEY;
    const encodedString = helperMethods.encodeToBase64(authString);
    const config = {
        method: 'get',
        url: `https://usa-api.idomoo.com/api/v2/storyboards/${process.env.STORYBOARD_ID}`,
        headers: {
            'Authorization': 'Basic ' + encodedString,
        }
    };
    let res = await axios(config);
    let data = res.data;
    return res;
}

module.exports = { sendGetRequest };
