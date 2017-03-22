import React from 'react'
//var React = require('react')
import ReactDOM from 'react-dom'
//var ReactDOM = require('react-dom)

var App = React.createClass({
    render: function() {
        return (
            <p>Hello World</p>
        )
    }
})

ReactDOM.render(<App/>, document.getElementById('app'))