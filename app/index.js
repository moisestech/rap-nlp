import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import TagNav from './components/TagNav/TagNav'
import Popular from './components/Popular/Popular'
import Battle from './components/Battle/Battle'

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
 render () {
  return (
   <div>
     <TagNav />
     <Battle />
     <Popular/>
    </div>
   )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

