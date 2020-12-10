import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childColor: '#FFF'
    }
  }

  childClickHandler = (newChildColor) => {
    this.setState((prevState) => ({
      color: getRandomColor(),
      childColor: newChildColor
    }))
  }

  // changeChildColor = () => {
  //   this.setState((prevState) => ({childColor: getRandomColor()}))
  // }

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childColor} clickHandler={this.childClickHandler}/>
        <Child color={this.state.childColor} clickHandler={this.childClickHandler}/>
      </div>
    )
  }
}

export default Parent
