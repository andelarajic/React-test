import React, { Component } from 'react'
import { green, pink } from '../../constants'

export default class ComponentB extends Component {
    constructor(props) {
        super(props)
        const color = localStorage.getItem('color-b')
        this.state = { color: color ? color : green }
    }

    changeColor() {
        const newColor = this.state.color === green ? pink : green
        this.setState({ color: newColor })
        localStorage.setItem('color-b', newColor)
    }

    render() {
        return (
            <div className={"component"} style={{ background: this.state.color }}>
                <button onClick={() => {
                    this.changeColor()
                }}>Click</button>
                <span className={"component_title"}> Component B </span>
                <span className={"component_text"}>{this.props.text}</span>
            </div>
        )
    }
}
