import React, { Component } from 'react'
import { Row, Col, Table, Image, Grid, Thumbnail } from 'react-bootstrap';
import PatientInfo from './PatientInfo';
import ReactGridLayout from 'react-grid-layout';
import Modal from 'react-bootstrap-modal';

import allergy1 from "../assets/allergies/1.png";
import recipe1 from "../assets/recipes/2.jpg";
import banana from "../assets/banana.png";
import bread from "../assets/bread.png";
import carrot from "../assets/carrot.png";
import celery from "../assets/celery.png";
import chicken from "../assets/chicken.png";
import fish from "../assets/fish.png";
import grape from "../assets/grape.png";
import steak from "../assets/steak.png";


import pdata from '../util/pdata';

const athena = require('../util/athena');

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            patientid: 3373,
            departmentid: 1,
            countDown: null,
            patients: athena.patients,
            showModal: false,
            selected: 0,
            selectedPatient: athena.patients[0],
            api: athena.api,
            patientData: athena.patients.map((patient, index) => {
                return {
                    allergyImages: [banana, fish],
                    recipeImages: [recipe1],
                    patientPreferences: pdata.orderStays.map((orderType) => orderType.name),
                    carePlan: pdata.orderStays,
                    allergies: pdata.allergies['allergies'],
                    mealPlan: pdata.orderTypeResponseRegularDiet['dietorders'] ,
                    suggestedIngredients: [bread, carrot, grape, celery, chicken, steak],
                    availableIngredients: [banana, bread, carrot, chicken, fish, grape, steak],
                    medications: ["Not Available"]
                }
            })
        };
         
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    onPatientClick(index) {
        console.log("index: " + index);
        this.setState({ selected: index, selectedPatient: this.state.patients[index] });
    }

    componentWillMount() {
        const api = this.state.api;
        const allergyRoute = `/chart/${this.state.patientid}/allergies`;
        console.log('getting: ' + allergyRoute)
        console.log('api: ' + JSON.stringify(api))
        api.GET(allergyRoute, {
            params: {
                departmentid: this.state.departmentid
            },
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            }
        }).on('done', function (response) {
            console.log('allergy response: ' + JSON.stringify(response));
        }).on('error', (err) => {
            console.log('error: ' + err);
        });
    }

    _renderPatientPreferences() {
        return (
            <div className="dash-grid-cell">
                {this.state.patientData[this.state.selected].patientPreferences.map(function (preference) {
                    return <li className="" key={preference}>{preference}</li>
                })}
            </div>
        )
    }

    _renderCarePlan() {
        return (
            <div className="dash-grid-cell">
                {this.state.patientData[this.state.selected].mealPlan.map((preference, index) => {
                    // priority, orderingmethodname, startdate, stayid, activateddate, ordertypeid,
                    // departmentid, approveduser, name, createduser, duration, orderid, createddate,
                    // status, orderingprovidername, activateduser, orderingproviderid, approveddate, note,
                    return (<div key={index}>
                        <li className="" ><b>orderingmethodname:</b> {preference.orderingmethodname}</li>
                        <li className="" ><b>startdate:</b> {preference.startdate}</li>
                        <li className="" ><b>stayid:</b> {preference.stayid}</li>
                        <li className="" ><b>activateddate:</b> {preference.activateddate}</li>
                        <li className="" ><b>ordertypeid:</b> {preference.ordertypeid}</li>
                        <li className="" ><b>departmentid:</b> {preference.departmentid}</li>
                        <li className="" ><b>approveduser:</b> {preference.approveduser}</li>
                        <li className="" ><b>name:</b> {preference.name}</li>
                        <li className="" ><b>createduser:</b> {preference.createduser}</li>
                        <li className="" ><b>duration:</b> {preference.duration}</li>
                        <li className="" ><b>orderid:</b> {preference.orderid}</li>
                        <li className="" ><b>createddate:</b> {preference.createddate}</li>
                        <li className="" ><b>status:</b> {preference.status}</li>
                        <li className="" ><b>orderingprovidername:</b> {preference.orderingprovidername}</li>
                        <li className="" ><b>activateduser:</b> {preference.activateduser}</li>
                        <li className="" ><b>orderingproviderid:</b> {preference.orderingproviderid}</li>
                        <li className="" ><b>approveddate:</b> {preference.approveddate}</li>
                        <li className="" ><b>note:</b> {preference.note}</li>
                    </div>)
                })}
            </div>
        )
    }

    _renderAllergies() {
        return (
            <div>
                    <Col xs={5} md={5}>
                        <Thumbnail href="#" alt="171x180"
                                   src={this.state.patientData[this.state.selected].allergyImages[0]} />
                    </Col>
                    <Col xs={5} md={5}>
                        <Thumbnail href="#" alt="171x180"
                                   src={this.state.patientData[this.state.selected].allergyImages[1]} />
                    </Col>
            </div>
        )
    }

    _renderMedications() {
        return (
            <div className="dash-grid-cell">
                {this.state.patientData[this.state.selected].medications.map(function (preference) {
                    return <li className="" key={preference}>{preference}</li>
                })}
            </div>
        )
    }


    _renderMealPlan() {
        return (
            <div className="dash-grid-cell">
                {this.state.patientData[this.state.selected].carePlan.map(function (key, index) {
                    return <div key={index}><li className="">{key.name}</li></div>
                })}
            </div>
        )
    }

    _renderSuggestedIngredients() {
        return (
            <div className="dash-grid-cell">
                {this.state.patientData[this.state.selected].suggestedIngredients.map(function(preference, index){
                    // return <li className="" key={preference}>{preference}</li>
                    return <Col xs={4} md={4} key={index}><Thumbnail href="#" alt="171x180" src={preference} /></Col>
                })}
            </div>
        )
    }

    _renderAvailableIngredients() {
        return (
            <div className="dash-grid-cell">
                {this.state.patientData[this.state.selected].availableIngredients.map(function(preference, index){
                    return <Col xs={5} md={5} key={index}><Thumbnail href="#" alt="171x180" src={preference} /></Col>
                })}
            </div>
        )
    }

    render() {
        const width = 3;
        const height = 10;
        const maxWidth = 10;
        const layout = [
            { i: 'a', x: 0, y: 0, w: width, h: height, minW: 2, maxW: maxWidth },
            { i: 'b', x: 3, y: 0, w: width, h: height, minW: 2, maxW: maxWidth },
            { i: 'c', x: 6, y: 0, w: width, h: height, minW: 2, maxW: maxWidth },
            { i: 'd', x: 0, y: 1, w: width, h: height, minW: 2, maxW: maxWidth },
            { i: 'e', x: 3, y: 1, w: width, h: height, minW: 2, maxW: maxWidth },
            { i: 'f', x: 6, y: 1, w: width, h: height, minW: 2, maxW: maxWidth },
            { i: 'g', x: 0, y: 2, w: width, h: height, minW: 2, maxW: maxWidth }
        ];
        const self = this;
        return (
            <div className="top-margin">
                {/* <h4 className="page-heading">Clinician Dashboard</h4> */}

                <Row>
                    <Col xs={12} md={3}>
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th className="patient-row patient-heading centered">Your Active Patients</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.patients.map((patient, index) => {
                                    return (
                                        <tr key={patient.id}
                                            className={"patient-row " + (index === self.state.selected ? 'active-row' : '')}
                                            onClick={() => self.onPatientClick(index)}>
                                            <td>{patient.name}</td>
                                        </tr>)
                                })}
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs={12} md={8}>

                        <PatientInfo patient={this.state.selectedPatient} showModal={this.state.showModal} handleOpenModal={this.handleOpenModal}/>

                        <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1275}>
                            <div className="dash-grid-cell" key="a"><h4>Patient Preferences</h4>
                                {this._renderPatientPreferences()}
                            </div>
                            <div className="dash-grid-cell" key="b"><h4>Care Plan</h4>
                                {this._renderCarePlan()}
                            </div>
                            <div className="dash-grid-cell" key="c"><h4>Allergies</h4>
                                {this._renderAllergies()}
                            </div>
                            <div className="dash-grid-cell" key="d"><h4>Medications</h4>
                                {this._renderMedications()}
                            </div>
                            <div className="dash-grid-cell" key="e"><h4>Meal Plan</h4>
                                {this._renderMealPlan()}
                            </div>
                            <div className="dash-grid-cell" key="f"><h4>Suggested Ingredients</h4>
                                {this._renderSuggestedIngredients()}
                            </div>
                            <div className="dash-grid-cell" key="g"><h4>Available Ingredients</h4>
                                {this._renderAvailableIngredients()}
                            </div>
                        </ReactGridLayout>
                    </Col>
                    <Col xsHidden md={2}></Col>

                </Row>

                <Modal
                className="white-background"
                    show={this.state.showModal}>
                    <Modal.Header closeButton>
                        <Modal.Title id='ModalHeader'>Weekly Meal Plan: {this.state.selectedPatient.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Athena API could not be reached</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Modal.Dismiss className='btn btn-default' onClick={() => {this.props.handleCloseModal()}}>Done</Modal.Dismiss>
                    </Modal.Footer>
                </Modal>
                
            </div>
        )
    }
}
