import React from 'react'
import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            profiles: [
                {name: 'David', age: 30, hobbies: ['swimming', 'jogging'], bio: 'Enjoy sport'}, 
                {name: 'Sarah', age: 32, hobbies: ['reading', 'gardening', 'parenting'], bio: 'Enjoy golden peaceful time'}
            ]
        }
        this.addUser = this.addUser.bind(this)

    }
    addUser(newProfile){
        this.setState({
            profiles: this.state.profiles.concat([newProfile])
        })
    }

    render (){
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
                <AddProfile addUser={this.addUser}/>
            </div>
        )
        
   }
}