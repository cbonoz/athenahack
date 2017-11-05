import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';

export default class MyBarChart extends Component {
    render() {
        return (
            <div>
                <h2 className="purple reporting-header">Historic Food Consumption</h2>
                <Bar
                    data={this.props.data}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: false
                    }}
                />

            </div>
        )
    }
}
