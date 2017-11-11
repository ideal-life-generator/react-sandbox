import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './containers/App'
import Main from './containers/Main'
import NotFound from './containers/NotFound'

export default () => (
  <Switch>
    <Route
      path="/"
      exact
      render={() => (
        <App>
          <Switch>
            <Route
              render={() => (
                <Main />
              )}
            />
          </Switch>
        </App>
      )}
    />
    <Route render={() => (<NotFound />)} />
  </Switch>
)
