import React, { Component } from 'react'
import { Table, Grid, Row, Col } from 'react-bootstrap';

export default class Reporting extends Component {
    render() {
        return (
            <div>

                <h4>Dashboard</h4>
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
                
            </div>
        )
    }
}
