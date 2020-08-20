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

           <Switch>
              <div className='content'>
                {/*<Route exact path='/uidev/hooks/quiz/why-hooks/theme' />*/}

                {<Route exact path='/uidev/hooks/useState/quiz-useState' />}
                {/*<Route exact path='/uidev/hooks/useState/practice-theme' />*/}
                {/*<Route exact path='/uidev/hooks/useState/practice-todos' />*/}
                {/*<Route exact path='/uidev/hooks/useState/practice-show-hide' />*/}

                {/*<<Route exact path='/uidev/hooks/sideEffects/quiz-execution-context' />*/}

                {/*<<Route exact path='/uidev/hooks/useEffect/quiz/useEffect' />*/}
                <Route exact path='/uidev/hooks/useEffect/practice/char-limit' component={CharLimit} />
                <Route exact path='/uidev/hooks/useEffect/practice/wait-delay' component={WaitDelay} />
                {/*<<Route exact path='/uidev/hooks/useEffect/practice/api-request' />*/}

                {/*<<Route exact path='/uidev/hooks/custom-hooks/quiz/rules-of-hooks/' />*/}
                {/*<<Route exact path='/uidev/hooks/custom-hooks/quiz/higher-order-components/' />*/}
                {/*<<Route exact path='/uidev/hooks/custom-hooks/quiz/render-props/' />*/}
                {/*<<Route exact path='/uidev/hooks/custom-hooks/quiz/custom-hooks/' />*/}
                {/*<<Route exact path='/uidev/hooks/custom-hooks/practice/useWait/' />*/}
                {/*<<Route exact path='/uidev/hooks/custom-hooks/practice/useWindowDimensions/' />*/}
                {/*<<Route exact path='/uidev/hooks/custom-hooks/practice/useFetch/' />*/}

                {/*<<Route exact path='/uidev/hooks/managing-complex-state/quiz/useReducer/' />*/}
                {/*<<Route exact path='/uidev/hooks/managing-complex-state/practice/useReducer/' />*/}
                {/*<<Route exact path='/uidev/hooks/managing-complex-state/practice/useFetch/' />*/}

                {/*<<Route exact path='/uidev/hooks/new-render-same-value/quiz-useRef/' />*/}
                {/*<<Route exact path='/uidev/hooks/new-render-same-value/practice/complex-form/' />*/}
                {/*<<Route exact path='/uidev/hooks/new-render-same-value/practice/click-game/' />*/}

                {/*<<Route exact path='/uidev/hooks/by-passing-props/quiz/react-context/' />*/}
                {/*<<Route exact path='/uidev/hooks/by-passing-props/practice/locale-context/' />*/}

                {/*<<Route exact path='/uidev/hooks/performance/quiz/performance/' />*/}

                {/*<<Route exact path='/uidev/hooks/project/intro/' />*/}
                {/*<<Route exact path='/uidev/hooks/project/index/' />*/}
                {/*<<Route exact path='/uidev/hooks/project/battle/' />*/}
                {/*<<Route exact path='/uidev/hooks/project/useHover/' />*/}
                {/*<<Route exact path='/uidev/hooks/project/Loading/' />*/}
                {/*<<Route exact path='/uidev/hooks/project/Popular/' />*/}
                {/*<<Route exact path='/uidev/hooks/project/Results/' />*/}
              </div>
           </Switch>

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

