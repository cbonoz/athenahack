import React, { Component } from 'react'
import { Table, Grid, Row, Col } from 'react-bootstrap';
import MyBarChart from './charts/MyBarChart';
import MyLineChart from './charts/MyLineChart';
import MyRadarChart from './charts/MyRadarChart';

const athena = require( '../util/athena');
export default class Reporting extends Component {

        // labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    constructor(props) {
        super(props)
        this.state = {
            patients: athena.patients,
            barData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'Meals this Week',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 2,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [65, 59, 80, 81, 56, 55, 40]
                }
                ],
            },
            lineData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Meal Orders by Month (2017)',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [650, 590, 800, 810, 560, 550, 400]
                  }
                ]
            },
            radarData: {
                labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                datasets: [
                  {
                    label: 'Gluten Free',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                  },
                  {
                    label: 'Low Carb Diet',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                  }
                ]
            }
        }
    }

    render() {
        return (
            <div className="top-margin">
                <div className="centered"><br/>---<br/></div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={1} md={1}>
                            <h4>Reporting</h4>
                        </Col>
                        <Col xs={11} md={11}>
                            {/* <h4 className="page-heading">Meal Metrics</h4> */}
                            <Table striped bordered condensed hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Link to Patient Record</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.patients.map((patient, index) => {
                                        return (<tr><td>{index}</td>
                                        <td>{patient.id}</td>
                                        <td>{patient.name}</td>
                                        <td><a href="#">@link</a></td></tr>);
                                    })}
                                </tbody>
                            </Table>
                            <Row>
                            <MyLineChart data={this.state.lineData}/>
                            </Row>
                            {/* <MyBarChart data={this.state.barData}/> */}
                            <Row>
                            <MyRadarChart data={this.state.radarData}/>
                            </Row>

                        </Col>
                        {/* <Col xs={1} md={1}>
                        </Col> */}
                    </Row>
                </Grid>

            </div>
        )
    }
}

