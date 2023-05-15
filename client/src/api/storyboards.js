import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

export const getFormProperties = async () => {
    console.log("IN GET FORM PROPS CLIENT");
    try {
        const res = await axios.get("http://localhost:3500/getFormProps");
        console.log(res.data)
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

