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
export default Profile