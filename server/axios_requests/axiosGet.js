const axios = require('axios');


//helper function 
function encodeToBase64(text) {
    // Create a buffer from the input text
    const buffer = Buffer.from(text, 'utf-8');

    // Encode the buffer to Base64
    const base64 = buffer.toString('base64');

    return base64;
}

async function sendGetRequest() {
    //get request configuration
    const authString = process.env.ACCOUNT_ID + ":" + process.env.SECRET_KEY;

    const encodedString = encodeToBase64(authString);

    const config = {
        method: 'get',
        url: `https://usa-api.idomoo.com/api/v2/storyboards/${process.env.STORYBOARD_ID}`,
        headers: {
            'Authorization': 'Basic ' + encodedString,
        }
    };

    let res = await axios(config);
    let data = res.data;
    console.log(data);
    return data;
}

module.exports = { sendGetRequest };
