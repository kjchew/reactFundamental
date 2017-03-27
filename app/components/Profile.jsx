import React from 'react'
let Profile = props => (
    <div>
        <h3>{props.name}</h3>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
        <ul>
            {props.hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </div>
)
Profile.propTypes ={
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    bio: React.PropTypes.string,
    hobbies: React.PropTypes.array
}
export default Profile