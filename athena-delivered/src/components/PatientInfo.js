import React, { Component } from 'react'
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import Modal from "react-bootstrap-modal";

export default class PatientInfo extends Component {

    render() {
        return (
            <div>
                <ListGroup>
                    <ListGroupItem className="patient-box-header" header={"Patient: " + this.props.patient.name} bsStyle="info"></ListGroupItem>
                    <ListGroupItem>
                        {/* <h4>Patient: {this.props.patient.name}</h4> */}
                        <p><i>id: <b>{this.props.patient.id}</b></i></p>
                        <p>Gender: {this.props.patient.gender}</p>
                        <p>Height: {this.props.patient.height}</p>
                        <p>Family: {this.props.patient.family}</p>
                        <Button bsStyle="success" className="meal-plan-button" bsSize="large" onClick={this.props.handleOpenModal}>View Meal Plan</Button>
                        <Button bsStyle="warning" className="meal-plan-button" bsSize="large" onClick={this.props.handleOpenModal}>View Meal History</Button>
                    </ListGroupItem>
                </ListGroup>

            </div>
        )
    }
}
