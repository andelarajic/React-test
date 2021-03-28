import React, { Component } from 'react'
import { green, pink } from '../../constants'

export default class ComponentA extends Component {
    constructor(props) {
        super(props)
        const color = localStorage.getItem('color-a')
        this.state = { color: color ? color : green }
        const text = localStorage.getItem('text')
        this.props.setText(text ? text : "")
    }

    changeColor() {
        const newColor = this.state.color === green ? pink : green
        this.setState({ color: newColor })
        localStorage.setItem('color-a', newColor)
    }

    changeText(input) {
        this.props.setText(input)
        localStorage.setItem('text', input) 
    }

    render() {
        return (
            <div className={"component"} style={{ background: this.state.color }}>
                <span className={"component_title"}> Component A </span>
                <button onClick={() => {
                    this.changeColor()
                }}>Click</button>
                <input type='text' value={this.props.text} onChange={e => this.changeText(e.target.value)} />
            </div>
        )
    }
}
