import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    return (
      <div
        className="child"
        style={{backgroundColor: this.props.color}}
        onClick={() => this.props.clickHandler(getRandomColor())}
      ></div>
    )
  }
}

export default Child
