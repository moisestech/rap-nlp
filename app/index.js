import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider } from './contexts/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/main.css'

import TopNav from './components/Nav/TopNav'
import Batch from './components/Batch'
import Batches from './components/Batches'

import CreatePhrase from './components/CreatePhrase'

import NavUidev from './components/Uidev/NavUidev'
import NavHooks from './components/Uidev/Hooks/NavHooks'
import NavUseState from './components/Uidev/Hooks/NavUseState'
import NavUseEffect from './components/Uidev/Hooks/NavUseEffect'
import NavCustomHooks from './components/Uidev/Hooks/NavCustomHooks'
import WaitDelay from './components/Uidev/Hooks/UseEffect/WaitDelay'
import CharLimit from './components/Uidev/Hooks/UseEffect/CharLimit'


// Component
// State
// Lifecycle
// UI

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'lights'
      }))
    }
  }

  render () {
    return (
     <Router>
        <ThemeProvider value={this.state}>
          <TopNav />

           <Route path='/uidev' component={NavUidev} />
           <Route path='/uidev/hooks' component={NavHooks} />
           <Route path='/uidev/hooks/useState' component={NavUseState} />
           <Route path='/uidev/hooks/useEffect' component={NavUseEffect} />
           <Route path='/uidev/hooks/customHook' component={NavCustomHooks} />

            <div className='content'>
              <Route exact path='/uidev/hooks/useEffect/practice/char-limit' component={CharLimit} />
              <Route exact path='/uidev/hooks/useEffect/practice/wait-delay' component={WaitDelay} />
            </div>

          <Switch>
            <Route exact path='/' component={Batch} />
            <Route path='/create-phrase' component={CreatePhrase} />
            <Route path='/batches' component={Batches} />
            <Route render={() => <h1>404</h1>} />
          </Switch>
        </ThemeProvider>
      </Router>
     )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

