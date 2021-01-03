import * as React from 'react'
import { Global, css } from '@emotion/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from '@layout/Header'
import Footer from '@layout/Footer'
import Home from '@pages/Home'

const GlobalStyle = css`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    font-family: 'Open Sans', cursive;
    font-size: 16px;
    line-height: 28px;
  }
`

const App = (): JSX.Element => (
  <Router>
    <Global styles={GlobalStyle} />
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
    <Footer />
  </Router>
)

export default App
