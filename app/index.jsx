import React from 'react'
import ReactDOM from 'react-dom'
//var ReactDOM = require('react-dom)
import App from './components/App.jsx'
import LifeCycle from './components/LifeCycle.jsx'
import MyComponent from './components/MyComponent.jsx'
import AnotherComponent from './components/AnotherComponent.jsx'

ReactDOM.render(<App/>, document.getElementById('app'))
//Usage for Children properties
/*
ReactDOM.render(<MyComponent>
                    Children text here
                    <AnotherComponent/>
                    <AnotherComponent/>
                </MyComponent>, document.getElementById('app'))
                */