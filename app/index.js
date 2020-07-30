import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './styles/main.css'

import TagNav from './components/TagNav/TagNav'
import Batch from './components/Batch/Batch'

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
 render () {
  return (
   <div>
     <TagNav />
     <Batch />
    </div>
   )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

