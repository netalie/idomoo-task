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



//const fs = require('fs');
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