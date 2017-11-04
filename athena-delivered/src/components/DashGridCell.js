import React, { Component } from 'react'

export default class DashGridCell extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    
    render() {
        return (
            <div className="dash-grid-cell">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
