import React, { Component } from 'react'
import { Row, Col, Grid, Table } from 'react-bootstrap';
import { api } from '../util/athena';
import ReactGridLayout from 'react-grid-layout';
import random_name from 'node-random-name';
import BlockStack from './BlockStack'

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        let names = []
        for (var i = 0; i < 20; i++ ) {
            names.push(random_name({ seed: 'Based on this' + i }))
        }
        this.state = {
            patientid: 3373,
            departmentid: 1,
            countDown: null,
            blocks: [],
            names: names
        }
    }

    addNewEvent() {
        const self = this;
        // new event
        const result = random_name() + " ate chicken"
        self.setState({ blocks: [result, ...self.state.blocks] })
    }

    componentDidMount() {
        this.setState({ countDown: setInterval(this.addNewEvent.bind(this), 1000) });
    }


    componentWillUnmount() {
        clearInterval(this.state.countDown);
    }

    componentWillMount() {
        const allergyRoute = `/chart/${this.state.patientid}/allergies`;
        console.log('getting: ' + allergyRoute)
        api.GET(allergyRoute, {
            params: {
                departmentid: this.state.departmentid
            }
        }).on('done', function (response) {
            console.log('allergy response: ' + JSON.stringify(response));
        }).on('error', (err) => {
            console.log('error: ' + err);
        });
    }

    render() {
        const layout = [
            { i: 'a', x: 0, y: 0, w: 3, h: 5, minW: 2, maxW: 4 },
            { i: 'b', x: 3, y: 0, w: 3, h: 5, minW: 2, maxW: 4 },
            { i: 'c', x: 6, y: 0, w: 3, h: 5, minW: 2, maxW: 4 },
            { i: 'd', x: 0, y: 1, w: 3, h: 5, minW: 2, maxW: 4 },
            { i: 'e', x: 3, y: 1, w: 3, h: 5, minW: 2, maxW: 4 },
            { i: 'f', x: 6, y: 1, w: 3, h: 5, minW: 2, maxW: 4 },
            { i: 'g', x: 0, y: 2, w: 3, h: 5, minW: 2, maxW: 4 }
        ];
        return (
            <div>
                <h4>Dashboard</h4>

                <Row className="show-grid">
                    <Col xs={12} md={2}>
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>Your Active Patients</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.names.map((name) => {
                                    return (<tr className="patient-row">
                                        <td>{name}</td>
                                    </tr>)
                                })}
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs={12} md={7}>

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
                    <Col xs={12} md={3}>
                        {/* <BlockStack blocks={this.state.blocks} /> */}
                    </Col>
                </Row>

            </div>
        )
    }
}
