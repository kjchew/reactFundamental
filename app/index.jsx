import React from 'react'
import ReactDOM from 'react-dom'
//var ReactDOM = require('react-dom)

let HOCGen = (Component, state) => class extends React.Component {
    constructor(props){
        super(props)
        this.state=state
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
            
        }, 500)
    }    
    render() {
        return <Component {...this.props} {...this.state} />
    }
}

class Comp1 extends React.Component{
    render(){
        return (
            <div>
                <p>Comp1</p>
                Name: {this.props.name}
                <p>{this.props.count}</p>

            </div>
        )
    }
}

class Comp2 extends React.Component{
    render(){
        return (
            <div>
                <p>Comp2</p>
                Name: {this.props.name}
                <p>{this.props.count}</p>
            </div>
        )
    }
}
Comp1.propTypes = {
    name: React.PropTypes.string,
    count: React.PropTypes.number.isRequired
}
Comp1.defaultProps = {
    name: 'GI Joe'
}
let WrappedComp1 = HOCGen(Comp1, {count: 0})
let WrappedComp2 = HOCGen(Comp2, {name: 'bill', count: 100})

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <WrappedComp1 />
                <WrappedComp2 />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))