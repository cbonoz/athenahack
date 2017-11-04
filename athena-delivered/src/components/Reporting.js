import React, { Component } from 'react'
import { Table, Grid, Row, Col } from 'react-bootstrap';

export default class Reporting extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={1} md={1}>
                        </Col>
                        <Col xs={10} md={10}>
                            {/* <h4 className="page-heading">Meal Metrics</h4> */}
                            <Table striped bordered condensed hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Link to Patient Record</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@here</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@here</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan="1">Larry</td>
                                        <td colSpan="1">Bird</td>
                                        <td>@here</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col xs={1} md={1}>
                        </Col>
                    </Row>
                </Grid>

            </div>
        )
    }
}
