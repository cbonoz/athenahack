import React, { Component } from 'react'
import {Button, Jumbotron, Grid, Row} from 'react-bootstrap';
import {Bar} from 'react-chartjs-2';

export default class Home extends Component {
    render() {

    const data = {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            label: 'Your Patient Meals',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      };
        return (
            <div>
                 <Jumbotron>
          <h1>AthenaDelivered</h1>
          <p>AI-generated and Coordinated Meal Plans for patients<br/>on a simple Web Interface</p>
          <p><Button bsStyle="primary">let's get started</Button></p>
        </Jumbotron>

        <Grid>
          <Row>
            <Bar
              data={data}
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
