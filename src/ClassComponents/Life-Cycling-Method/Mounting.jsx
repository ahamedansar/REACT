// this is when the component is being created and inserted into the dom

import React, { Component } from 'react'

export default class Mounting extends Component {
  componentDidMount(){

    console.log("component mounted!");

  }
  
  
    render() {
    return (
      <div>
        <p>Component has been mounted.</p>
      </div>
    )
  }
}
