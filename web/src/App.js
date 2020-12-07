import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'wouter'

import { Loading } from './components/loading/loading'
import { NavBar } from './components/navbar/navbar'

// const Index = lazy(() => import('./pages/index/Index'))
const Meal = lazy(() => import('./pages/meal/Meal'))
const NotFound = lazy(() => import('./pages/not-found/NotFound'))
const Profile = lazy(() => import('./pages/profile/Profile'))

function App() {
  return (
    <div className="app">
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/" component={Meal} />
          <Route path="/meal" component={Meal} />
          <Route path="/profile" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  )
}

export default App
