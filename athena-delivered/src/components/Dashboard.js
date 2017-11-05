import React, { Component } from 'react'
import { Row, Col, Table, Image, Grid, Thumbnail, Label } from 'react-bootstrap';
import PatientInfo from './PatientInfo';
import ReactGridLayout from 'react-grid-layout';
import Modal from 'react-bootstrap-modal';

import allergy1 from "../assets/allergies/1.png";
import recipe1 from "../assets/recipes/2.jpg";
import salad from "../assets/salad.jpeg";
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
                    allergyImages: [banana, fish, chicken],
                    recipeImages: [recipe1],
                    patientPreferences: [athena.random(pdata.orderStays.map((orderType) => orderType.name)), athena.random(pdata.orderStays.map((orderType) => orderType.name))],
                    carePlan: pdata.orderStays,
                    allergies: pdata.allergies['allergies'],
                    mealPlan: pdata.orderTypeResponseRegularDiet['dietorders'] ,
                    suggestedIngredients: [["salad", salad],["chicken", chicken]],
                    suggestedIngredientsLabels: ["bread", "carrot", "chicken", "steak"],
                    availableIngredients: [banana, bread, carrot, chicken, fish, grape, steak],
                    medications: ["Alprazolam (Xanax)"]
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
                <ul>
                {this.state.patientData[this.state.selected].patientPreferences.map(function (preference) {
                    return <li className="" key={preference}>{preference}</li>
                })}
                </ul>
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
                        <li className="" ><b>Ordering method name:</b> {preference.orderingmethodname}</li>
                        <li className="" ><b>Start date:</b> {preference.startdate}</li>
                        <li className="" ><b>Stay id:</b> {preference.stayid}</li>
                        <li className="" ><b>Activated date:</b> {preference.activateddate}</li>
                        <li className="" ><b>Ordertype id:</b> {preference.ordertypeid}</li>
                        <li className="" ><b>Department id:</b> {preference.departmentid}</li>
                        <li className="" ><b>Approved user:</b> {preference.approveduser}</li>
                        <li className="" ><b>Name:</b> {preference.name}</li>
                        <li className="" ><b>Created user:</b> {preference.createduser}</li>
                        <li className="" ><b>Duration:</b> {preference.duration}</li>
                        <li className="" ><b>Order id:</b> {preference.orderid}</li>
                        <li className="" ><b>Created date:</b> {preference.createddate}</li>
                        <li className="" ><b>Status:</b> {preference.status}</li>
                        <li className="" ><b>Ordering provider name:</b> {preference.orderingprovidername}</li>
                        <li className="" ><b>Activated user:</b> {preference.activateduser}</li>
                        <li className="" ><b>Ordering provider id:</b> {preference.orderingproviderid}</li>
                        <li className="" ><b>Approved date:</b> {preference.approveddate}</li>
                        <li className="" ><b>Notes:</b> {preference.note}</li>
                    </div>)
                })}
            </div>
        )
    }

    _renderAllergies() {
        return (
            <div>
                 <ul>
                    <li>Bananas</li>
                    <li>Fish</li>
                </ul>
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
                <ul>
                    <li>Salad</li>
                    <li>Chicken</li>
                </ul>
                {this.state.patientData[this.state.selected].suggestedIngredients.map(function(preference, index){
                    // return <li className="" key={preference}>{preference}</li>
                    console.log(preference)
                    // var finalLabel = preference.replace('\/static\/media\/','')
                    // var realFinalLabel = finalLabel.replace('.\\d.+','')
                    return <div><Col xs={7} md={7} key={index}>
                        {/*<Label>{preference[0]}</Label>*/}
                        <Thumbnail className="" href="#" alt="171x180" src={preference[1]} /></Col></div>
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
        const height = 12;
        const maxWidth = 10;
        const layout = [
            { i: 'a', x: 0, y: 0, w: width, h: height, minW: 2, maxW: maxWidth },
            { i: 'b', x: 3, y: 0, w: width*2, h: height, minW: 2, maxW: maxWidth },
            { i: 'c', x: 6, y: 0, w: width, h: height, minW: 2, maxW: maxWidth },
            { i: 'd', x: 0, y: 1, w: width, h: height, minW: 2, maxW: maxWidth },
            { i: 'e', x: 3, y: 1, w: width, h: height, minW: 2, maxW: maxWidth }
            // { i: 'f', x: 6, y: 1, w: width, h: height, minW: 2, maxW: maxWidth }
            // { i: 'g', x: 0, y: 2, w: width, h: height, minW: 2, maxW: maxWidth }
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
                            <div className="dash-grid-cell" key="a"><h4>Patient Dietary Orders</h4>
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
                            <div className="dash-grid-cell" key="e"><h4>Suggested Meal Options</h4>
                                {this._renderSuggestedIngredients()}
                            </div>
                            {/* <div className="dash-grid-cell" key="f"><h4>Available Ingredients</h4>
                                {this._renderAvailableIngredients()}
                            </div> */}
                            {/* <div className="dash-grid-cell" key="e"><h4>Meal Plan</h4>
                                {this._renderMealPlan()}
                            </div> */}
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
