import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider } from './contexts/theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/main.css'

import TopNav from './components/Nav/TopNav'
import Batch from './components/Batch'
import CreatePhrase from './components/CreatePhrase'
import PostApp from './components/Posts'

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

          <Switch>
            <Route exact path='/' component={Batch} />
            <Route path='/create-phrase' component={CreatePhrase} />
            <Route path='/post' component={PostApp} />
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

