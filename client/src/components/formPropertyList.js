import React from 'react';
import axios from 'axios';
import { getFormProperties, generateVideo } from "../api/storyboards"
const apiUrl = process.env.NEXT_PUBLIC_API_URL;



export default class propertyList extends React.Component {
    state = {
        properties: []
    }



    // componentDidMount() {
    //     axios.get(`apiUrl/api/getFormProps`)
    //         .then(res => {
    //             const properties = res.data;
    //             console.log("IN FORM PROPS GET IN CLIENT: " + properties)
    //             this.setState({ persons });
    //         })
    // }

    render() {
        return (
            <ul>
                {
                    this.state.persons
                        .map(person =>
                            <li key={person.id}>{person.name}</li>
                        )
                }
            </ul>
        )
    }
}
