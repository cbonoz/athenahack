import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div>
                {/* <Navbar inverse collapseOnSelect> */}
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <LinkContainer to="/">
                                <a className="white">AthenaDelivered</a>
                            </LinkContainer>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            {/* <LinkContainer to="/">
                                <NavItem>Home</NavItem>
                            </LinkContainer> */}
                            <LinkContainer to="/dashboard">
                                <NavItem>Clinician Dashboard</NavItem>
                            </LinkContainer>
                            <LinkContainer to="/reporting">
                                <NavItem>Meal Metrics</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}