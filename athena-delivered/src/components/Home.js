import React, { Component } from 'react'
import { Button, Jumbotron, Grid, Row, Col } from 'react-bootstrap';
// import  { ReactRotatingText } from 'react-rotating-text';
import { Bar } from 'react-chartjs-2';
import athena_logo from './../assets/athena_delivered_trans.png';
import BlockStack from './BlockStack'
import random_name from 'node-random-name';

import bgImage from '../assets/hospital_cafe_3.png';
const athena = require( '../util/athena');

var backgroundStyle = {
    backgroundImage: `url(${bgImage})`,
}

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            titleWords: ['Clinicians', 'Patients', 'Chefs'],
            actions: [' ordered lunch ', ' ordered dinner ', ' was marked as \'had eaten\' '],
            blocks: []
        }
    }

    addNewEvent() {
        const self = this;
        // new event
        const randomAction = athena.random(this.state.actions)
        const actionString = random_name({seed: `${Math.random()}`}) + randomAction + `by ${random_name({seed: `${Math.random()}`})}`;
        const result = { name: actionString, index: self.state.blocks.length };
        self.setState({ blocks: [result, ...self.state.blocks] })
    }

    componentDidMount() {
        this.setState({ countDown: setInterval(this.addNewEvent.bind(this), 1000) });
    }

    componentWillUnmount() {
        clearInterval(this.state.countDown);
    }

    /* <b><ReactRotatingText items={['Clinicians', 'Patients', 'Hospital Kitchens']} /></b> */

    render() {
        const self = this;

        return (
            <div>

                <Row>
                    <Col xs={12} md={9}>
                        <Jumbotron className="jumbotron transparency-jumbotron" style={backgroundStyle}>
                            <div className="static-modal-jumbotron opaque centered">
                                <img className="header-image" src={athena_logo} />
                                {/* <h1>AthenaDelivered</h1> */}

                                <div className="header-text-section">
                                    <span className="header-text">
                                        <p>A centralized and transparent Meal Plan center for <br />
                                            {'{'}Clinicians, Patients, Chefs{'}'}

                                            <br />on a simple Web Interface.</p>
                                    </span>
                                    <p><Button bsStyle="primary" className="start-button">Let's get started</Button></p>
                                </div>
                            </div>
                        </Jumbotron>

                    </Col>
                    <Col xs={12} md={3}>
                    </Col>
                </Row>
            </div>
        )
    }
}

                            // <BlockStack blocks={this.state.blocks} />