import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link>{' '}</li>
                            <li><Link to={{ pathname: '/dashboard' }}>Dashboard</Link>{' '}</li>
                            <li><Link to="/reporting">Reporting</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}