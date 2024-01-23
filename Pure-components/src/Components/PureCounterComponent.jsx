import React, { PureComponent } from 'react'

export default class PureCounterComponent extends PureComponent {
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
    }

    setToggle = () => {
        this.setState(
            {toggle: !this.state.toggle}
        )
    }


  render() {
    console.log("This is Pure Component")
    return (
      <div>
        <div className='Pure'>
            <h2>Pure Components</h2>
            <h1>{this.state.count}</h1>
            <button className='Toggle' onClick={this.setToggle}>Toggle</button>
            <button className='Counter' onClick={this.incrementValue}>Counter</button>
        </div>
      </div>

      
    )
  }
}
