import React, { Component } from 'react'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class PatientInfo extends Component {
    render() {
        return (
            <div>
                <ListGroup>
                <ListGroupItem header={"Patient: " + this.props.patient.name} bsStyle="info"></ListGroupItem>
                <ListGroupItem>
                {/* <h4>Patient: {this.props.patient.name}</h4> */}
                <p><i>id: <b>{this.props.patient.id}</b></i></p>
                <p>Gender: {this.props.patient.gender}</p>
                <p>Height: {this.props.patient.height}</p>
                <p>Family: {this.props.patient.family}</p>
                <Button bsStyle="success meal-plan-button" bsSize="large" onClick={() => { console.log('click')}}>View Meal Plan</Button>
                </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
}
