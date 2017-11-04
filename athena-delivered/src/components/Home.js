import React, { Component } from 'react'
import {Button, Jumbotron, Grid, Row} from 'react-bootstrap';
// import  { ReactRotatingText } from 'react-rotating-text';
import {Bar} from 'react-chartjs-2';


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {
                labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
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
                titleWords: ['Clinicians', 'Patients', 'third']
            }
        }
    }

                        /* <b><ReactRotatingText items={['Clinicians', 'Patients', 'Hospital Kitchens']} /></b> */
    render() {
        const self = this;
        const bgImage = '../assets/hospital_cafe.png';

        return (
            <div>
                <Jumbotron className="jumbotron">
                    <h1>AthenaDelivered</h1>
                    
                    <p>A centralized and transparent Meal Plan center for 
                    <br />on a simple Web Interface</p>
                    <p><Button bsStyle="primary">let's get started</Button></p>
                </Jumbotron>

                <Grid>
                    <Row>
                        <Bar
                            data={self.state.data}
                            width={100}
                            height={500}
                            options={{
                                maintainAspectRatio: false
                            }}
                        />
                    </Row>
                </Grid>
            </div>
        )
    }
}
