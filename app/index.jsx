import React from 'react'
//var React = require('react')
import ReactDOM from 'react-dom'
//var ReactDOM = require('react-dom)

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            profiles: [
                {name: 'David'}, {name: 'Sarah'}
            ]
        }
    }

    render (){
        return (
            <div>
                <section>
                    <h3>Profile 1</h3>
                    <p>Name: {this.state.profiles[0].name}</p>
                </section>
                <section>
                    <h3>Profile 2</h3>
                    <p>Name: {this.state.profiles[1].name}</p>
                </section>

            </div>
        )
        
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))