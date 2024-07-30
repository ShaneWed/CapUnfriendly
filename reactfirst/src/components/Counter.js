import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count: 0
      }
    }

    incrementCount() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    incrementFive() {
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
        this.incrementCount()
    }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment count</button>
      </div>
    )
  }
}

export default Counter