import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Button, Jumbotron, Grid, Row, Col } from 'react-bootstrap';
// import  { ReactRotatingText } from 'react-rotating-text';
import { Bar } from 'react-chartjs-2';
import athena_logo from './../assets/athena_delivered_trans.png';
import BlockStack from './BlockStack'
import random_name from 'node-random-name';

import bgImage from '../assets/hospital_cafe_3.png';
const athena = require( '../util/athena');


export default class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            titleWords: ['Clinicians', 'Patients', 'Chefs'],
            actions: ['ordered lunch', 'ordered dinner', 'was marked as \'had eaten\' for', 'cancelled meal'],
            roles: ['Clinician', 'Attending Nurse', 'Doctor'],
            foodItems: [
                "Chicken",
                "Salmon",
                "Steak",
                "Gluten Free Plate",
                "Fruit Plate",
                "Kale Salad",
                "Salad",
                "Hamburger"
            ],
            blocks: []
        }
    }

    addNewEvent() {
        const self = this;
        // new event
        const randomAction = athena.random(this.state.actions)
        const randomRole = athena.random(this.state.roles);
        const randomFood = athena.random(this.state.foodItems);
        const randomName1 = random_name({seed: `${Math.random()}`});
        const randomName2 = random_name({seed: `${Math.random()}`});
        const actionString = `${randomName1} ${randomAction} ${randomFood}, recorded by ${randomRole} ${randomName2}.`;
        const result = { name: actionString, index: self.state.blocks.length };
        self.setState({ blocks: [result, ...self.state.blocks] })

        clearInterval(this.state.countDown);
        const rand = Math.round(Math.random()*2250)+750;
        this.setState({ countDown: setInterval(this.addNewEvent.bind(this), rand) });
    }

    componentDidMount() {
        // Start the random event interval.
        this.setState({ countDown: setInterval(this.addNewEvent.bind(this), 1000) });
    }

    componentWillUnmount() {
        clearInterval(this.state.countDown);
    }

    /* <b><ReactRotatingText items={['Clinicians', 'Patients', 'Hospital Kitchens']} /></b> */

    render() {
        const self = this;

        const backgroundStyle = {
            backgroundImage: `url(${bgImage})`,
        }

        return (
            <div className="bootstrap-green">
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
                        <ListGroup>
                            <ListGroupItem bsStyle="success"><span className="centered">Activity Feed</span></ListGroupItem>
                            <ListGroupItem>
                                <BlockStack blocks={this.state.blocks}/>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </div>
        )
    }
}
