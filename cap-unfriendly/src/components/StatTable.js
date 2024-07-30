import React, { Component } from 'react'
import ListEntries from './ListEntries.js'

export class StatTable extends Component {

  render() {
    return (
      <div className="box">
        <thead>
          <h7>StatTable</h7>
        </thead>
        <tbody>
          <div> 
          <ListEntries />
          </div>
        </tbody>
        <tfoot>
          <h9>End StatTable</h9>
        </tfoot>
      </div>
    )
  }
}

export default StatTable