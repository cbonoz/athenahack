import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <LinkContainer to="/">
                                <a href="#">AthenaDelivered</a>
                            </LinkContainer>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to="/">
                                <NavItem eventKey={1} href="#">Home</NavItem>
                            </LinkContainer>
                        </Nav>
                        <Nav pullRight>
                            <LinkContainer to="/dashboard">
                                <NavItem eventKey={1} href="#">Clinician Dashboard</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/reporting">
                                <NavItem eventKey={2} href="#">Meal Metrics</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}