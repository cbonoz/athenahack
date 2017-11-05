import React, { Component } from 'react'
import { Row, Col, Table } from 'react-bootstrap';
import PatientInfo from './PatientInfo';
import ReactGridLayout from 'react-grid-layout';
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
            api: athena.api
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

                            </div>
                            <div className="dash-grid-cell" key="b"><h4>Care Plan</h4>

                            </div>
                            <div className="dash-grid-cell" key="c"><h4>Allergies</h4>

                            </div>
                            <div className="dash-grid-cell" key="d"><h4>Medications</h4>

                            </div>
                            <div className="dash-grid-cell" key="e"><h4>Meal Plan</h4>

                            </div>
                            <div className="dash-grid-cell" key="f"><h4>Suggested Ingredients</h4>

                            </div>
                            <div className="dash-grid-cell" key="g"><h4>Available Ingredients</h4>

                            </div>
                        </ReactGridLayout>
                    </Col>
                    
                </Row>

            </div>
        )
    }
}
