import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import TagNav from './components/TagNav'

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
 render () {
  return (
   <div>
     <TagNav />
    </div>
   )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
