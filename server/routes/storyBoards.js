const express = require("express");
const router = express.Router();
const axiosGet = require('../axios_requests/axiosGet');
const axiosPost = require('../axios_requests/axiosPost');

router.get('/getFormProps', async (req, res) => {
    try {
        let response = await axiosGet.sendGetRequest();
        res.json(response.data);
        console.log(response.data);
    } catch (error) {
        console.error('ERROR', error.message);
        res.status(500).json(response.error);
    }

});

router.post('/generate', async (req, res) => {
    let data = req.body;
    console.log("IN POST REQUEST, RECIEVED DATA FROM CLIENT IS: " + data);
    if (data) {
        try {
            const response = await axiosPost.sendPostRequest();
            res.json(response.data);
        } catch (error) {
            console.error('ERROR', error.message);
            res.status(500).json(response.error);
        }
    }
    else {
        res.status(500).json({ error: 'Invalid input' })
    }


});
module.exports = router;
