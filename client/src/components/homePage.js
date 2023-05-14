import { useState, useEffect } from "react";
import Input from "./Input";
import { getFormProperties, generateVideo } from "../api/storyboards"
import axios from "axios";

const HomePage = () => {

    let formObjList = []

    useEffect(() => {
        formObjList = getFormProperties();
        setFormValues(formObjList.data);
        //setInputValues keys 

    })

    //const [inputValues, setInputValues] = useState({});
    const [formValues, setFormValues] = useState([]);
    const handleChange = (e, index) => {
        const values = [...formValues];
        values[index].value = e.target.value;
        setFormValues(values);
    };
    return (
        <div>
            <form>
                {formValues ? formValues.map((obj, index) => (
                    //if condition return image/input
                    <Input
                        key={index}
                        objValue={obj}
                        onChange={handleChange}
                        index={index}
                    />
                )) : null}
                <button value="submit" className="submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
}
export default HomePage;
