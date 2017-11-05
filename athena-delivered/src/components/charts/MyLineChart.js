import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';

export default class MyLineChart extends Component {
    render() {
        return (
            <div>
                <h2 className="purple reporting-header">Historic Food Consumption</h2>
                <Line data={this.props.data} />
            </div>
        )
    }
}
