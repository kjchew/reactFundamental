import React from 'react'
//var React = require('react')

export default class AddProfile extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.addUser}>Add User</button>
            </div>
        )
    }
}