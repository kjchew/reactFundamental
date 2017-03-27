import React from 'react'

class LifeCycle extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            count: 1
        }
        this.periodic = this.periodic.bind(this)
    }

    periodic(){
        this.setState({
            count: this.state.count + 1
        })
    }

    componentWillMount(){
        console.log("componetWillMount")
        clearInterval(this.periodic)
    }

    componentDidMount() {
        console.log("componentDidMOunt")
        setInterval(
           this.periodic
        , 500)
    }

    pageRerender(){
        this.setState({
           count: 1
        })
        clearInterval(this.periodic)
    }

    render(){
        console.log("Rendering")
        return (
            <div>
               <p>Hello World</p>
               <p>Count: {this.state.count}</p>
               <button onClick={this.pageRerender.bind(this)}>Re-render</button>
            </div>
        )
    }
}
export default LifeCycle