import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'wouter'

import { Loading } from './components/loading/loading'
import { NavBar } from './components/navbar/navbar'

const Index = lazy(() => import('./pages/index/Index'))
const NotFound = lazy(() => import('./pages/not-found/NotFound'))

function App() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" component={Index} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </>
  )
}

export default App
