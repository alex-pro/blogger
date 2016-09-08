import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import configureStore from './store/configureStore'
import ReduxToastr from 'react-redux-toastr'
import { App, Home, Articles } from './components'
import './styles/app.js'

const middleware = routerMiddleware(browserHistory)
const store = configureStore(null, middleware)
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <div>
      <ReduxToastr timeOut={3000} newestOnTop={false} position='top-right'/>
      <Router history={history}>
        <Route path='/' component={App}>
          <IndexRoute component={Home}/>
          <Route path='articles' component={Articles}/>
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
