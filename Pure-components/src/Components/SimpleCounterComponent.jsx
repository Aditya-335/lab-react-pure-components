import React, { Component } from 'react'

export default class SimpleCounterComponent extends Component {
    constructor(){
        super()
        this.state = {
            count:0,
            toggle:false,
        }
    }

    incrementValue = () => {
        if(this.state.toggle){
            this.setState(
                {count: this.state.count + 1}
            )
        }
        else{
            this.state.count = this.state.count
        }
    }

    setToggle = () => {
        this.setState(
            {toggle: !this.state.toggle}
        )
    }

   

  render() {
    console.log("This is Simple Component")
    return (
      <div>
        <div className='Simple'>
            <h2>Simple Components</h2>
            <h1>{this.state.count}</h1>
            <button className='Toggle' onClick={this.setToggle}>Toggle</button>
            <button className='Counter' onClick={this.incrementValue}>Counter</button>
        </div>
      </div>

      
    )
  }
}
