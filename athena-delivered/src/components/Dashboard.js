import React, { Component } from 'react'
import { Row, Col, Table, Image, Grid , Thumbnail} from 'react-bootstrap';
import PatientInfo from './PatientInfo';
import ReactGridLayout from 'react-grid-layout';

import allergy1 from "../assets/allergies/1.png";
import recipe1 from "../assets/recipes/2.jpg";
import pdata from '../util/pdata';

const athena = require( '../util/athena');

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            patientid: 3373,
            departmentid: 1,
            countDown: null,
            patients: athena.patients,
            selected: 0,
            selectedPatient: athena.patients[0],
            api: athena.api,
            patientData: athena.patients.map((patient, index) => {
                return {
                    allergyImages: [allergy1],
                    recipeImages: [recipe1],
                    patientPreferences: pdata.orderStays.map((orderType) => orderType.name),
                    carePlan: pdata.orderStays,
                    allergies: pdata.allergies['allergies'],
                    mealPlan: pdata.orderTypeResponseRegularDiet['dietorders'] ,
                    suggestedIngredients: ["Kale", "Beef Tenderloin", "Pork Loin", "Chicken Thigh", "Chicken Wings"],
                    availableIngredients: ["Beef Tenderloin", "Pork Loin", "Chicken Thigh", "Chicken Wings"],
                    medications: ["Not Available"]
                }
            })
        };
    }

    onPatientClick(index) {
        console.log("index: " + index);
        this.setState({selected: index, selectedPatient: this.state.patients[index]});
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
                {this.state.patientData[this.state.selected].patientPreferences.map(function(preference){
                    return <li className="" key={preference}>{preference}</li>
                })}
            </div>
        )
    }

    _renderCarePlan() {
        return (
            <div className="dash-grid-cell">
                {this.state.patientData[this.state.selected].mealPlan.map(function(preference){
                    // priority, orderingmethodname, startdate, stayid, activateddate, ordertypeid,
                    // departmentid, approveduser, name, createduser, duration, orderid, createddate,
                    // status, orderingprovidername, activateduser, orderingproviderid, approveddate, note,
                    return <div>
                        <li className="" key={preference}>{preference.orderingmethodname}</li>
                        <li className="" key={preference}>{preference.startdate}</li>
                        <li className="" key={preference}>{preference.stayid}</li>
                        <li className="" key={preference}>{preference.activateddate}</li>
                        <li className="" key={preference}>{preference.ordertypeid}</li>
                        <li className="" key={preference}>{preference.departmentid}</li>
                        <li className="" key={preference}>{preference.approveduser}</li>
                        <li className="" key={preference}>{preference.name}</li>
                        <li className="" key={preference}>{preference.createduser}</li>
                        <li className="" key={preference}>{preference.duration}</li>
                        <li className="" key={preference}>{preference.orderid}</li>
                        <li className="" key={preference}>{preference.createddate}</li>
                        <li className="" key={preference}>{preference.status}</li>
                        <li className="" key={preference}>{preference.orderingprovidername}</li>
                        <li className="" key={preference}>{preference.activateduser}</li>
                        <li className="" key={preference}>{preference.orderingproviderid}</li>
                        <li className="" key={preference}>{preference.approveddate}</li>
                        <li className="" key={preference}>{preference.note}</li>
                    </div>
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
                        <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
                    </Col>
                    <Col xs={5} md={5}>
                        <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
                    </Col>
                    <Col xs={5} md={5}>
                        <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
                    </Col>
                    <Col xs={5} md={5}>
                        <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
                    </Col>
            </div>
        )
    }

    _renderMedications() {
        return (
            <div className="dash-grid-cell">
                {this.state.patientData[this.state.selected].medications.map(function(preference){
                    return <li className="" key={preference}>{preference}</li>
                })}
            </div>
        )
    }


    _renderMealPlan() {
        return (
            <div className="dash-grid-cell">
                {this.state.patientData[this.state.selected].carePlan.map(function(key, preference){
                    return <div><li className="" key={preference}>{key.name}</li></div>
                })}
            </div>
        )
    }

    _renderSuggestedIngredients() {
        return (
            <div className="dash-grid-cell">
                {this.state.patientData[this.state.selected].suggestedIngredients.map(function(preference){
                    return <li className="" key={preference}>{preference}</li>
                })}
            </div>
        )
    }

    _renderAvailableIngredients() {
        return (
            <div className="dash-grid-cell">
                {this.state.patientData[this.state.selected].availableIngredients.map(function(preference){
                    return <li className="" key={preference}>{preference}</li>
                })}
                <Image src={this.state.patientData[this.state.selected].availableIngredients[0]} responsive />
            </div>
        )
    }

    render() {
        const width = 3;
        const height = 10;
        const maxWidth = 10;
        const layout = [
            { i: 'a', x: 0, y: 0, w: width, h: height, minW: 2, maxW: maxWidth},
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
                    <Col xs={12} md={9}>

                        <PatientInfo patient={this.state.selectedPatient}/>

                        <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
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
                    
                </Row>

            </div>
        )
    }
}
