import React from 'react'
import { Route, Switch } from 'wouter'

import Index from './pages/index/Index'
import { NotFound } from './pages/not-found/NotFound'
import { NavBar } from './components/navbar/navbar'

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" component={Index} />
        <Route component={NotFound} />
      </Switch>
    </>
  )
}

export default App
