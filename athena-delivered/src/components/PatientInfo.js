import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class PatientInfo extends Component {
    render() {
        return (
            <div>
                <h1>Patient: {this.props.patient.name}</h1>
                <p><i>id: {this.props.patient.id}</i></p>
                <p>Gender: {this.props.patient.gender}</p>
                <p>Height: {this.props.patient.height}</p>
                <p>Family: {this.props.patient.family}</p>
                <Button bsStyle="success meal-plan-button" bsSize="large" onClick={() => { console.log('click')}}>View Meal Plan</Button>
            </div>
        )
    }
}
