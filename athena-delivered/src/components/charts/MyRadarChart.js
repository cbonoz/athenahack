import React, { Component } from 'react'
import {Radar} from 'react-chartjs-2';

export default class MyRadarChart extends Component {
    render() {
        return (
            <div>
                <Radar data={this.props.data} />
            </div>
        )
    }
}
