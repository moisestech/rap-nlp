import React from 'react'

export default class Results extends React.Component {
  render() {
    return (
      <div>
        Results
        <pre>{JSON.stringigy(this.prop, null, 2)}</pre>
      </div>
    )
  }
}

