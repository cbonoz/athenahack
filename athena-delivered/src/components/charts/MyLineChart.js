import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';

export default class MyLineChart extends Component {
    render() {
        return (
            <div>
                <Line data={this.props.data} />
            </div>
        )
    }
}
