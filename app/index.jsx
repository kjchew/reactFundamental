import React from 'react'
//var React = require('react')
import ReactDOM from 'react-dom'
//var ReactDOM = require('react-dom)

class Profile extends React.Component{
    constructor (props){
        super(props)
    }
    render (){
        let hobbies = this.props.hobbies.map(hobby => {
            return (<li>{hobby}</li>)
        })
        return (
            <div>
                <section>
                    <h3>Profile</h3>
                    <p>Name: {this.props.name} age: {this.props.age} {this.props.bio}</p>
                    <ul>{hobbies}</ul>
                </section>

            </div>
        )
    }
}
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            profiles: [
                {name: 'David', age: 30, hobbies: ['swimming', 'jogging'], bio: 'Enjoy sport'}, 
                {name: 'Sarah', age: 32, hobbies: ['reading', 'gardening', 'parenting'], bio: 'Enjoy golden peaceful time'}
            ]
        }
    }

    render (){
        let profile1 = this.state.profiles[0],
        profile2 = this.state.profiles[1]
        let profiles = this.state.profiles.map(profile => {
            return (
                <Profile
                    name = {profile.name}
                    age = {profile.age}
                    bio = {profile.bio}
                    hobbies = {profile.hobbies}
                />
            )
        })
        return (
            <div>
                {profiles}
            </div>

        )
        
    }
}

ReactDOM.render(<App/>, document.getElementById('app'))