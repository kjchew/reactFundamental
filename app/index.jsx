import React from 'react'
//var React = require('react')
import ReactDOM from 'react-dom'
//var ReactDOM = require('react-dom)

var App = React.createClass({
    getInitialState: function(){
        return {
            profiles: [
                {name: 'David'}, {name: 'Sarah'}
            ]
        }
    }, 
    render: function() {
        return (
            <div>
                <section>
                    <h3>Profile 1</h3>
                    <p>Name: {this.state.profiles[0].name} </p>
                </section>
                <section>
                    <h3>Profile 2</h3>
                    <p>Name: {this.state.profiles[0].name}</p>
                </section>
            </div>
        )
    }
})

ReactDOM.render(<App/>, document.getElementById('app'))