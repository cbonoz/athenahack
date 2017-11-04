import React, { Component } from 'react'
import { Row, Col, Grid } from 'react-bootstrap';

export default class Dashboard extends Component {
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
