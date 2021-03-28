import React, { Component } from 'react'
import { green, pink } from '../../constants'

export default class ComponentB extends Component {
    constructor(props) {
        super(props)
        this.state = { color: green }
    }

    changeColor() {
        const newColor = this.state.color === green ? pink : green
        this.setState({ color: newColor })
    }

    render() {
        return (
            <div className={"component"} style={{ background: this.state.color }}>
                <span className={"component_title"}> Component B </span>
                <button onClick={() => {
                    this.changeColor()
                }}>Click</button>
            </div>
        )
    }
}
