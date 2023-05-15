import { Card, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import UploadImg from "./UploadImg";
import { getFormProperties, generateVideo } from "../api/storyboards";


const DynamicForm = (props) => {
    const [formFields, setFormFields] = useState([]);
    const [formData, setFormData] = useState({});



    const getInitialFormFields = (dataArray) => {
        const initialValues = {};
        if (dataArray && dataArray.length > 0) {
            dataArray.forEach((field) => {
                if (field.val === "number") {
                    initialValues[field.key.replace(/\s/g, "")] = 0;
                } else {
                    initialValues[field.key.replace(/\s/g, "")] = "";
                }
            });

        }
        return initialValues;
    };


    useEffect(() => {

        async function fetchFormData() {
            try {
                const response = await getFormProperties();
                const data = await response.data;
                let fieldsObj = getInitialFormFields(data);
                setFormFields(data);
                setFormData(fieldsObj);
            } catch (error) {
                console.error('Error fetching form data:', error);
            }
        }
        fetchFormData();
    }, []);



    const onChangeFormData = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onSubmitForm = async () => {
        //I just console logged , make the axios post here and send formData
        let data = [];
        for (const [key, value] of Object.entries(formData)) {
            data.push({ key, value });
        }

        const request = {
            "storyboard_id": 31193,
            "output": {
                "video": [
                    {
                        "video_type": "mp4",
                        "height": 1
                    }
                ]
            },
            data
        }
        const response = await generateVideo(request);
        console.log(response);
        props.setVideoUrl(response.output.video[0].links.url);
        props.setCheckStatusUrl(response.output.video[0].links.check_status_url);
    };

    const ongetFormProperties = () => {
        getFormProperties();
    };

    return (
        <div className="d-flex justify-content-center mt-3">
            <Card
                style={{
                    width: "40rem",
                    backgroundColor: "#B6EAFA",
                    borderColor: "black",
                }}
            >
                <Form>
                    {formFields.map((field, index) => {
                        if (field.val === "image") {
                            return <UploadImg key={index} />;
                        } else {
                            return (
                                <Form.Group key={index} className="mx-3 my-3">
                                    <Form.Label>{field.key}</Form.Label>
                                    <Form.Control
                                        name={field.key.replace(/\s/g, "")}
                                        type={field.val}
                                        value={formData[field.key.replace(/\s/g, "")]}
                                        onChange={onChangeFormData}
                                    />
                                </Form.Group>
                            );
                        }
                    })}

                    <Button className="mb-2" onClick={onSubmitForm}>
                        Submit
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

export default DynamicForm;