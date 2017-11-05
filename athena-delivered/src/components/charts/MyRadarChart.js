import React, { Component } from 'react'
import {Radar} from 'react-chartjs-2';

export default class MyRadarChart extends Component {
    render() {
        return (
            <div>
                <h2 className="purple reporting-header">Most Popular Food by Category</h2>
                <Radar data={this.props.data} />
            </div>
        )
    }
}
