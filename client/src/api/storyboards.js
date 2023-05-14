import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getFormProperties = async () => {
    try {
        const res = await axios.get(`${apiUrl}/getFormProps`);
        console.log("IN GET FORM PROPS CLIENT RETURNED DATA:" + res.data)
        return res.data;
    } catch (err) {
        console.error(err);
    }
};

export const generateVideo = async (userData) => {
    try {
        const res = await axios.post(`${apiUrl}/generate`, userData);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

