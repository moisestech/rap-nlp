import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './styles/main.css'

import TagNav from './components/TagNav/TagNav'
import Popular from './components/Popular/Popular'
import Battle from './components/Battle/Battle'
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
     <Battle />
     <Popular/>
     <Batch />
    </div>
   )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

