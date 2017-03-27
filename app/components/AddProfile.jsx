import React from 'react'
//var React = require('react')
import ReactDOM from 'react-dom'

export default class AddProfile extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            bio:'',
            hobbies: '',
            input:''
        }
        this.handleName = this.handleName.bind(this)
        this.handleBio = this.handleBio.bind(this)
        this.handleAge = this.handleAge.bind(this)
        this.handleHobbies = this.handleHobbies.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleClearAndFocus = this.handleClearAndFocus.bind(this)
        this.clearAndFocus = this.clearAndFocus.bind(this)
    }

    handleName(evt) {
        this.setState({
            name: evt.target.value
        })
    }
    handleBio(evt) {
        this.setState( {
            bio: evt.target.value
        })
    }
    handleHobbies(evt) {
        this.setState ({
            hobbies: evt.target.value
        })
    }
    handleAge(evt) {
        this.setState ({
            age: evt.target.value
        })
    }

    handleClick(evt) {
        let newProfile = {
            name: this.state.name,
            bio: this.state.bio,
            age: this.state.age,
            hobbies: [this.state.hobbies]
        }
        this.props.addUser(newProfile)
    }

    handleClearAndFocus(evt){
        this.setState({
            input: evt.target.value
        })
    }

    clearAndFocus(){
        this.setState({
            input: ''
        }, () => {
            ReactDOM.findDOMNode(this.refs.inputBox).focus()
        })
    }

    render() {
        return (
            <div>
                <p>Add a new profile</p>
                Name: <input name="name" onChange={this.handleName} value={this.state.name} />
                Bio: <input name="bio" onChange={this.handleBio} value={this.state.bio} />
                Age: <input name="age" onChange={this.handleAge} value={this.state.age} />
                Hobbies: <input name="hobbies" onChange={this.handleHobbies} value={this.state.hobbies} />
                <button onClick={this.handleClick}>Add User</button>
                <p>
                    <input placeholder="Clear and Focus" type="text" ref="inputBox" value={this.state.input} onChange={this.handleClearAndFocus}/>
                </p>
                <button onClick={this.clearAndFocus}>Clear and Focus</button>
            </div>
        )
    }
}