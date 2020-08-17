import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './styles/main.css'

import TopNav from './components/TopNav'
import Batch from './components/Batch'

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
 render () {
  return (
   <div>
     <TopNav />
     <Batch />
    </div>
   )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

