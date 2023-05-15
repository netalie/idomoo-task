import { Card, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import UploadImg from "./UploadImg";
import { getFormProperties } from "../api/storyboards";

const DynamicForm = () => {
    const [formFields, setFormFields] = useState([]);
    const [formData, setFormData] = useState({});

    const mockFormFields = [
        { key: "Email Adress", val: "string", description: "Enter an Email" },
        { key: "First Name", val: "string", description: "Enter First Name" },
        { key: "Last Name", val: "string", description: "Enter Last Name" },
        {
            key: "Telephone Number",
            val: "tel",
            description: "Enter Telephone Number",
        },
        { key: "Some Number", val: "number", description: "Enter Some Number" },
        { key: "image", val: "image", description: "Upload Image" },
    ];

    const getInitialFormFields = (dataArray) => {
        const initialValues = {};
        dataArray.forEach((field) => {
            if (field.val === "number") {
                initialValues[field.key.replace(/\s/g, "")] = 0;
            } else {
                initialValues[field.key.replace(/\s/g, "")] = "";
            }
        });
        return initialValues;
    };

    useEffect(() => {
        //1.You need to make a get req from their server and get the form fields
        //2.save the array in formFields state.
        //3.call getInitialFormFields with the array and set the function value to formData
        //4. change the map function in the component to formFields instead of mock..
        //5.you can earase the function I have now in useEffect, it was juste to check the mock data
        setFormData(getInitialFormFields(mockFormFields));
        // async function fetchFormData() {
        //     try {
        //       const response = await fetch('/api/form-data');
        //       const data = await response.json();
        //       setFormFields(data);
        //       setFormData(getInitialFormFields(formData));
        //     } catch (error) {
        //       console.error('Error fetching form data:', error);
        //     }
        //   }
        //   fetchFormData();
    }, []);

    const onChangeFormData = (e) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onSubmitForm = () => {
        //I just console logged , make the axios post here and send formData
        console.log(formData);
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
                    {mockFormFields.map((field, index) => {
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
            <Button className="mt-2" onClick={ongetFormProperties}>
                Get data
            </Button>
        </div>
    );
};

export default DynamicForm;