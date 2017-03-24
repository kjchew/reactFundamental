import React from 'react'
export default class Profile extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
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