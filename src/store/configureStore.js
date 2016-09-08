import { createStore, applyMiddleware, combineReducers } from 'redux'
import appReducers from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

export default function configureStore(initialState, middleware) {
  const logger = createLogger()
  const store = createStore(
    combineReducers({
      ...appReducers,
      initialState,
      routing: routerReducer,
      form: formReducer,
      toastr: toastrReducer
    }),
    applyMiddleware(thunk, logger, middleware)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
