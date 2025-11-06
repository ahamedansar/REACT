import React, { Component } from 'react'

export default class UnMounting extends Component {

    state = {
        time: 0
    }
    componentDidMount() {
        //start a timer when the component mount
        this.timer = setInterval(() => {
            this.setState(prevState => ({
                time: prevState.time + 369
            }))

        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("time cleaned up")
    }
    render() {
        return (
            <div>
                <h2>Time: {this.state.time} Seconds</h2>
            </div>
        )
    }
}










