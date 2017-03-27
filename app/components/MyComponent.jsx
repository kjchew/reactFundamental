import React from 'react'

export default class MyComponent extends React.Component{

    render() {
        return ( 
            <div>
              <h1>MyComponent</h1>
              {this.props.children}
            </div>
        )
    }

}