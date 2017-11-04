import React, { Component } from 'react'
import { Row, Col, Grid } from 'react-bootstrap';

import { api } from '../util/athena';

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            patientid: 3373,
            departmentid: 1
        }
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
        return (
            <div>
                <h1>Dashboard</h1>

                <Row className="show-grid">
                    <Col xs={12} md={2}>
                       Patients list goes here 
                    </Col>
                    <Col xs={12} md={8}>
                        Main content area
                    </Col>
                    <Col xs={12} md={2}>
                        Live data feed goes here
                    </Col>
                </Row>

            </div>
        )
    }
}
