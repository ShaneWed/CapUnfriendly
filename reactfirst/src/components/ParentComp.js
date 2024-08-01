import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Shane'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Shane'
            })
        }, 2000)
    }

  render() {
    console.log('****************Parent Comp render')
    return (
      <div>
        Parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp